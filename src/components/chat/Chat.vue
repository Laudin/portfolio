<script setup lang="ts" name="ChatComponent">
import { ref, nextTick } from "vue";
import SendIcon from "../assets/SendIcon.vue";
import CloseIcon from "../assets/CloseIcon.vue";
import ThinkingAnimation from "../assets/ThinkingAnimation.vue";
import GIcon from "../assets/GIcon.vue";

type Message = {
	content: string;
	isUser: boolean;
};

const open = ref(false);
const messagesContainer = ref<HTMLElement>();
const question = ref("");
const textareaRef = ref<HTMLTextAreaElement>();
const messages = ref<Message[]>([
	{
		content:
			"Hello! I'm Gastón Laudin AI assistant. I'm here to help you with any questions you may have about my professional experience, education, projects or any other topic. How can I assist you today?",
		isUser: false,
	},
]);
const isThinking = ref(false);
const production = true
	? "https://chat.gastonlaudin.workers.dev"
	: "http://localhost:8787";

function toggle() {
	open.value = !open.value;
}

const handleFocus = () => {
	// Small delay to ensure keyboard is fully open
	setTimeout(() => {
		if (textareaRef.value && open.value) {
			textareaRef.value.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
		}
	}, 300);
};

const autoHeight = (payload: Event) => {
	if (payload.target instanceof HTMLTextAreaElement) {
		payload.target.style.height = "1px";
		payload.target.style.height = `${Math.min(
			payload.target.scrollHeight,
			150,
		)}px`;
	}
};

const scrollToBottom = () => {
	nextTick(() => {
		if (messagesContainer.value) {
			messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
		}
	});
};

const linkMappings = {
	OberLimp: "https://oberlimp.com.ar",
	GitHub: "https://github.com/Laudin",
	LinkedIn: "https://linkedin.com/in/gastonlaudin",
	IdealURL: "https://idealurl.vercel.app/",
	MailMark: "https://marketing-email-laudins-projects.vercel.app",
	Portfolio: "https://gastonlaudin.com",
	// Email: "mailto:gaston@gastonlaudin.com",
};
// Function to replace multiple terms with their corresponding links
const formatMessageContent = (content: string) => {
	let formattedContent = content;

	// Iterate through each mapping and replace the terms
	Object.entries(linkMappings).forEach(([term, url]) => {
		const regex = new RegExp(`\\b${term}\\b`, "g"); // \b for word boundaries
		const linkClass =
			"text-blue-400 hover:text-blue-300 transition-colors duration-200";
		const target = url.startsWith("mailto:")
			? ""
			: 'target="_blank" rel="noopener noreferrer"';

		formattedContent = formattedContent.replace(
			regex,
			`<a href="${url}" ${target} class="${linkClass}">${term}</a>`,
		);
	});

	return formattedContent;
};

const fetchQuestions = () => {
	fetch(production, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((data: Message[]) => {
			messages.value.push(...data);
			scrollToBottom();
		})
		.catch((error) => {
			console.log(error);
		});
};
fetchQuestions();

const sendQuestion = async (event: KeyboardEvent | MouseEvent) => {
	event.stopPropagation();
	event.preventDefault();
	if (question.value.trim() === "") return;

	messages.value.push({
		content: question.value,
		isUser: true,
	});
	scrollToBottom();
	isThinking.value = true;
	const userMessage = question.value;
	question.value = "";

	const stream = await fetch(production, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "text/event-stream",
		},
		body: JSON.stringify({
			userMessage,
		}),
	});

	isThinking.value = false;

	if (stream.status !== 200) {
		messages.value.push({
			content:
				"❌ Sorry, I couldn't process your request. Please try again later.",
			isUser: false,
		});
		return;
	}

	const chatUserId = stream.headers.get("chatUserId");
	if (chatUserId)
		document.cookie = `chatUserId=${chatUserId};domain=.gastonlaudin.com; path=/; max-age=31536000; SameSite=None; Secure`;

	if (!stream.body) return;
	const reader = stream.body.getReader();
	const decoder = new TextDecoder();
	let buffer = "";
	const regex = /data: \{"content":"([^"]*)"\}/;
	// Add a new empty message to the end
	messages.value.push({
		isUser: false,
		content: "",
	});

	while (true) {
		// normal way to deal with streams
		const { done, value } = await reader.read();

		if (done) break;
		const data = decoder.decode(value, { stream: true });

		// data can contain multiple data lines, so we need to split them
		const chunks = data.split("\n"); // \n is a custom delimiter

		for (const chunk of chunks) {
			if (!chunk) continue; // split adds an empty string at the end

			try {
				// this will throw an error if the chunk is not a valid JSON.
				const dataJSON = JSON.parse(chunk.split("data: ")[1]);
				// Add user message to the end
				messages.value[messages.value.length - 1] = {
					isUser: false,
					content:
						messages.value[messages.value.length - 1].content +
						dataJSON.content,
				};
				scrollToBottom();
			} catch {
				// if the chunk is not a valid JSON, we add it to the buffer
				buffer += chunk;
				// we check if the buffer contains a valid JSON
				if (buffer.match(regex)) {
					const dataJSON = JSON.parse(buffer.split("data: ")[1]);
					messages.value[messages.value.length - 1] = {
						isUser: false,
						content:
							messages.value[messages.value.length - 1].content +
							dataJSON.content,
					};
					buffer = "";
				}
			}
		}
	}
};
</script>

<template>
	<div class="fixed ml-1 right-1 bottom-1 md:right-6 md:bottom-6 z-50">
		<p
			v-if="!open"
			class="absolute right-[70px] text-nowrap bg-[#202020] px-3 py-2 rounded-full"
		>
			Ask me anything!
		</p>

		<div
			v-if="!open"
			@click="toggle"
			class="absolute z-100 w-[50px] h-[50px]"
		/>

		<div
			:class="
				{
					open: 'w-[100%] min-w-[300px] md:w-[400px] h-[1500px] max-h-[calc(max(100vh-225px,200px))] md:max-h-[calc(max(100vh-225px,200px))] bg-[#202020] rounded-md flex flex-col justify-between',
					close:
						'w-[50px] h-[50px] max-h-[50px] overflow-hidden bg-[#202020] rounded-full animate-pulse-shadow',
				}[open ? 'open' : 'close']
			"
			class="float-right"
			style="
				transition: width 0.3s ease-in-out, max-height 0.3s ease-in-out,
					height 0.3s ease-in-out, border-radius 0s ease-in-out;
			"
		>
			<GIcon
				v-if="!open"
				class="text-[#202020] bg-gray-300 min-w-[50px] h-[50px] rounded-full"
			/>

			<div
				:class="!open && 'opacity-0'"
				class="pl-3 pr-4 h-14 flex items-center justify-between bg-[#191919]"
			>
				<div
					class="h-12 flex gap-2 items-center text-sm text-gray-400 font-bold"
				>
					<GIcon class="text-white min-w-8 h-8 rounded-full" />
					<p>Gastón Laudin AI assitant</p>
				</div>
				<div @click="toggle" class="cursor-pointer text-gray-400">
					<CloseIcon class="text-gray-400" />
				</div>
			</div>

			<div :class="!open && 'opacity-0'" class="px-1 py-2 h-full flex flex-col">
				<div class="flex align-bottom" style="flex: 1 1 0">
					<div
						class="mb-4 overflow-y-auto px-2 mt-auto"
						ref="messagesContainer"
						:style="{
							scrollBehavior: 'smooth',
							maxHeight: 'calc(max(100vh - 350px, 80px))',
							scrollbarColor: '#cccccc transparent',
							scrollbarWidth: 'thin',
							scrollbarGutter: 'stable',
						}"
					>
						<div v-for="message in messages" class="text-sm">
							<div v-if="message.isUser" class="flex justify-end">
								<p class="ml-10 bg-gray-700 p-3 rounded-md mb-3 inline-flex">
									{{ message.content }}
								</p>
							</div>
							<div v-else class="flex gap-2 mr-10 mb-3">
								<GIcon class="text-white min-w-6 h-6 rounded-full" />

								<p class="" v-html="formatMessageContent(message.content)"></p>
							</div>
						</div>
						<ThinkingAnimation v-if="isThinking" />
					</div>
				</div>

				<div class="flex w-full h-auto gap-0 bg-neutral-900 rounded-md">
					<textarea
						ref="textareaRef"
						@keydown.enter="sendQuestion"
						@focus="handleFocus"
						rows="1"
						v-model="question"
						@input="autoHeight"
						type="text"
						class="resize-none flex-auto text-wrap h-full outline-none px-2 py-1 text-sm"
					/>
					<button
						@click="sendQuestion"
						class="cursor-pointer self-end mb-1 mr-1"
					>
						<SendIcon />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
textarea {
	scrollbar-color: #282828 #00000000;
	scrollbar-width: thin;
	margin: 4px 0;
}

@keyframes pulse-shadow {
	0% {
		box-shadow: 0 0 4px 0 rgba(129, 122, 122, 0.7);
	}
	50% {
		box-shadow: 0 0 4px 7px rgba(255, 255, 255, 0);
	}
}

.animate-pulse-shadow {
	animation: pulse-shadow 2s infinite;
}
</style>
