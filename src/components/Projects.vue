<script setup lang="ts" name="ProjectsComponent">
import { onMounted, useTemplateRef } from "vue";

const elementIsVisibleInViewport = (el: HTMLElement) => {
	const { top } = el.getBoundingClientRect();
	const { innerHeight } = window;
	return top > 0 && top < innerHeight;
};

const proyects = [
	useTemplateRef("first"),
	useTemplateRef("second"),
	useTemplateRef("third"),
];

onMounted(() => {
	window.addEventListener("scroll", () => {
		proyects.forEach((el) => {
			if (el.value && elementIsVisibleInViewport(el.value)) {
				el.value.classList.add("animate-fadein");
				el.value.classList.remove("opacity-0");
			}
		});
	});
});
</script>

<template>
	<div id="projects">
		<h1 class="text-4xl text-center mb-8 font-bold">Projects</h1>
		<div>
			<div ref="first" id="first" class="mb-16 opacity-0">
				<div class="info">
					<div class="flex items-center gap-8 mb-4">
						<img class="w-10 bg-white rounded-full p-1" src="/projects/M.png" />
						<h5 class="font-bold">Mail Mark</h5>
					</div>
					<p class="mt-4 mb-8 mx-2">
						An app to create your own email template for free, using craft.js
					</p>
					<div class="stack">
						<div>
							<p>Next</p>
							<img src="/technologies/next.png" />
						</div>
						<div>
							<p>Typescript</p>
							<img src="/technologies/ts.png" />
						</div>
						<div>
							<img class="w-18!" src="/technologies/craftjs.png" />
						</div>
					</div>
				</div>
				<div id="first-img" class="p-8 rounded-md">
					<img
						class="hover:scale-105 transition-all"
						src="/projects/mail-mark.png"
					/>
				</div>
			</div>

			<div ref="second" class="relative mb-16 opacity-0">
				<div class="info">
					<div class="flex items-center gap-8 mb-4">
						<img
							class="w-10 rounded-full bg-neutral-800 p-1.5"
							src="/projects/scissors.png"
						/>
						<h5 class="font-bold">Ideal URL</h5>
					</div>
					<p class="mt-4 mb-8 mx-2">Create your own email template for free</p>

					<div class="stack">
						<div>
							<p>Next</p>
							<img src="/technologies/next.png" />
						</div>
						<div>
							<p>Tailwind</p>
							<img src="/technologies/tailwind.png" />
						</div>
						<div>
							<p>Typescript</p>
							<img src="/technologies/ts.png" />
						</div>
						<div>
							<p>Prisma</p>
							<img src="/technologies/prisma.png" />
						</div>
					</div>
				</div>

				<div id="second" class="relative rounded-md mb-16">
					<div class="p-8 z-10 relative">
						<img
							class="hover:scale-105 transition-all"
							src="/projects/ideal-url.png"
						/>
					</div>
					<div
						class="absolute z-1 w-full h-full top-0 bg-[url(/bg-dark.png)] bg-[auto_300px] opacity-20"
					/>
				</div>
			</div>

			<div ref="third" class="opacity-0">
				<div class="info">
					<div class="flex items-center gap-8 mb-4">
						<img
							class="w-10 rounded-full p-1.5 bg-sky-950"
							src="/projects/oberlimp-logo.png"
						/>
						<h5 class="font-bold">OberLimp</h5>
					</div>
					<p class="mb-8 mx-2">
						A simple landing page for a laundry business I did as a freelancer.
					</p>

					<div class="stack">
						<div>
							<p>React</p>
							<img src="/technologies/react.png" />
						</div>
						<div>
							<p>Vite</p>
							<img src="/technologies/vite.png" />
						</div>
						<div>
							<p>SASS</p>
							<img src="/technologies/sass.png" />
						</div>
					</div>
				</div>

				<div id="third" class="relative rounded-md">
					<div class="p-8 z-10 relative">
						<img
							class="hover:scale-105 transition-all"
							src="/projects/oberlimp.png"
						/>
					</div>
					<div
						id="gradiant"
						class="absolute z-1 w-full h-full top-0 opacity-20 rounded-md"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#projects {
	margin-top: 64px;
	scroll-margin-top: 100px;
}

#first-img {
	background: linear-gradient(
		162deg,
		rgba(52, 52, 52, 1) 0%,
		rgba(213, 213, 215, 1) 36%,
		rgba(213, 213, 215, 1) 58%,
		rgba(208, 202, 181, 1) 76%,
		rgba(36, 89, 161, 1) 100%
	);
}
#gradiant {
	background: linear-gradient(45deg, #588ffe 0%, rgb(0, 0, 255) 100%);
}
h5 {
	font-size: 24px;
	color: #ffe8c5;
}
p {
	color: #cccccc;
}
.stack {
	display: flex;
	gap: 16px;
	margin-bottom: 16px;
}
.stack img {
	width: 25px;
	border-radius: 5px;
}
.stack div {
	display: inline-flex;
	gap: 8px;
	align-items: center;
	background-color: #232223;
	padding: 6px 10px;
	border-radius: 5px;
	font-weight: 600;
}

@media screen and (max-width: 768px) {
	.info {
		margin: 0 16px;
	}
	.stack {
		flex-wrap: wrap;
	}
}
</style>
