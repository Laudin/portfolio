<script setup lang="ts">
import HeaderComponent from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Technologies from "./components/Technologies.vue";
import Projects from "./components/Projects.vue";
import Experience from "./components/Experience.vue";
import Chat from "./components/chat/Chat.vue";
</script>

<template>
	<div class="bg-[#101111] text-white h-screen scroll-smooth scheme-only-light">
		<Chat />
		<HeaderComponent />
		<div class="max-w-6xl m-auto">
			<Hero />
		</div>
		<div class="bg-neutral-900 py-16">
			<div
				class="grid max-w-7xl grid-cols-1 mx-6 md:m-auto md:grid-cols-3 md:gap-12 items-center md:items-start"
			>
				<About class="md:col-start-3" />
				<Technologies class="md:col-start-1 md:row-start-1" />
			</div>
			<div class="max-w-6xl m-auto">
				<Experience />
				<Projects />
			</div>
		</div>
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap");

* {
	font-family: "Onest", serif;
}
p {
	font-family: "Onest", serif;
	font-optical-sizing: auto;
	font-style: normal;
}
</style>
