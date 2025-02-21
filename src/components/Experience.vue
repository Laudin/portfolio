<script setup lang="ts" name="ExperienceComponent"></script>

<template>
	<div id="experience" class="mt-8">
		<h1 class="my-8 text-4xl text-center font-bold">Experience</h1>

		<div
			class="bg-neutral-700 py-8 shadow-[inset_0_0px_15px_5px] shadow-neutral-800 rounded-lg"
		>
			<div class="z-10 relative">
				<div class="bg-neutral-800 p-4 rounded-md max-w-2xl m-auto">
					<div class="flex items-center justify-between flex-col md:flex-row">
						<img src="/experience/loesen.png" />
						<p class="italic text-gray-400! text-sm">Oct 2022 - Oct 2024</p>
					</div>

					<h5 class="font-bold text-lg px-2 mt-4 mb-2">Full Stack developer</h5>
					<p class="px-3">
						Development of a buying and selling platform. Built with Next.js
						(performance, integrations, UI/UX) and NestJS (authentication,
						payment, and shipping systems) with NoSQL database management.
					</p>
				</div>
			</div>
			<div class="relative w-full h-16 flex justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="90px"
					viewBox="0 0 24 24"
					class="absolute -top-3 z-0"
				>
					<path
						id="Vector"
						d="M12 21V3"
						stroke="#ffffffd7"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<div class="z-10 relative">
				<div class="bg-neutral-800 p-4 rounded-md max-w-2xl m-auto">
					<div class="flex items-center justify-between flex-col md:flex-row">
						<img src="/experience/developstoday.png" />
						<p class="italic text-gray-400! text-sm">
							(contractor) Oct 2024 - May 2025
						</p>
					</div>

					<h5 class="font-bold text-lg px-2 mt-4 mb-2">Full Stack developer</h5>
					<p class="px-3">
						Multiple projects working with React, Next.js, and NestJS, using key
						tools like Redux, TanStack Query, Sanity.io, etc., with a strong
						focus on AWS infrastructure and AI (LLMs like ChatGPT's Whisper
						model).
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#experience {
	scroll-margin-top: 100px;
}
img {
	height: 40px;
}
p {
	color: #cccccc;
	letter-spacing: 0.07em;
}
</style>
