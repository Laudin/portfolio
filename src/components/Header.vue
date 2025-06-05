<script setup lang="ts" name="HeaderComponent">
import HamburguerComponent from "./extras/Hamburguer.vue";
import { ref } from "vue";
const open = ref(false);
function toggle() {
	open.value = !open.value;
}

const downloadPDF = () => {
	fetch("resume.pdf").then((response) => {
		response.blob().then((blob) => {
			// Creating new object of PDF file
			const fileURL = window.URL.createObjectURL(blob);

			// Setting various property values
			let alink = document.createElement("a");
			alink.href = fileURL;
			alink.download = "resume.pdf";
			alink.click();
		});
	});
};
</script>

<template>
	<div class="bg-[#232323] md:bg-[#23232354] w-full fixed z-50 px-8">
		<div class="m-auto flex justify-between items-center h-14 md:h-24">
			<a href="#hero" class="text-lg z-10">
				<span class="text-gray-400">Gastón</span> Laudin
			</a>
			<div class="md:flex hidden gap-8 text-gray-500 font-bold items-center">
				<a href="#about">About</a>
				<a href="#experience">Experience</a>
				<a href="#projects">Projects</a>
				<button
					@click="downloadPDF"
					class="border cursor-pointer border-[#4c2be2] text-white px-4 py-2 rounded-md hover:bg-[#3c21b3] transition-colors"
				>
					Resume
				</button>
			</div>
			<div class="md:hidden">
				<HamburguerComponent @click="toggle" :open="open" />
				<div
					v-if="open"
					class="menu absolute left-0 top-0 z-0 bg-neutral-900 w-full"
				>
					<div
						class="flex flex-col h-full mt-40 items-center gap-16 text-gray-500 font-bold"
					>
						<a @click="toggle" href="#about" class="text-xl">About</a>
						<a @click="toggle" href="#experience" class="text-xl">Experience</a>
						<a @click="toggle" href="#projects" class="text-xl">Projects</a>
						<a href="/resume.pdf" download class="text-xl">Resume</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes menu {
	0% {
		height: 0vh;
	}
	100% {
		height: 100vh;
	}
}
.menu {
	animation: menu 0.5s ease-in-out;
	height: 100vh;
}
@keyframes fadeIn {
	0% {
		opacity: 0;
		transform: translateY(15px);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
}
.menu div a:nth-child(1) {
	animation: fadeIn 0.5s ease-in-out;
}
.menu div a:nth-child(2) {
	animation: fadeIn 0.7s ease-in-out;
}
.menu div a:nth-child(3) {
	animation: fadeIn 0.9s ease-in-out;
}
.menu div a:nth-child(4) {
	animation: fadeIn 1.2s ease-in-out;
}

a {
	position: relative;
}
a::after {
	content: "";
	background-color: black;
	position: absolute;
	bottom: 0;
	left: 0;
	height: 2px;
	width: 0;
	transition: 0.4s;
}
a:hover::after,
a:focus::after {
	background-color: #4c2be2;
	width: 100%;
}
</style>
