<script setup lang="ts" name="AboutComponent"></script>

<template>
	<div id="about">
		<h1 class="text-center font-bold text-xl mb-3">About me</h1>
		<p class="tracking-wider">
			Well-qualified Full Stack Developer familiar with a range of programming
			utilities and languages. Knowledgeable of backend and frontend development
			requirements. Quick to adapt to new technologies and always eager to take
			on challenges. Handles any part of preocess with ease. Collaborative team
			player with excellent technical abilities.
		</p>

		<div class="max-w-2xl mt-8">
			<div class="flex flex-col gap-4 bg-neutral-800 rounded-md py-6 px-8">
				<div class="mb-2">
					<h2 class="mb-2">Skills</h2>
					<div class="flex flex-wrap gap-2">
						<div
							class="ml-4 inline-flex items-center px-2 gap-2 rounded-full border border-white"
						>
							<p>Frontend developer</p>
							<img class="size-4" src="/frontend.png" />
						</div>
						<div
							class="ml-4 inline-flex items-center px-2 gap-2 rounded-full border border-white"
						>
							<p>Backend developer</p>
							<img class="size-4" src="/backend.png" />
						</div>
					</div>
				</div>

				<div class="mb-2">
					<h2 class="mb-2">Email</h2>
					<p class="ml-4">gastonlaudin@gmail.com</p>
				</div>

				<div class="mb-2">
					<h2 class="mb-2">Location</h2>
					<div class="ml-4 flex items-center gap-2">
						<img class="size-5" src="/argentina.png" />
						<p>Argentina</p>
					</div>
				</div>

				<div class="mb-2">
					<h2 class="mb-2">Phone number</h2>
					<p class="ml-4">+549 3743483480</p>
				</div>

				<div class="mb-2">
					<h2 class="mb-2">Languages</h2>
					<div class="flex gap-2 ml-4">
						<div class="border border-white rounded-full px-2">
							<p>Spanish</p>
						</div>
						<div class="border border-white rounded-full px-2">
							<p>English</p>
						</div>
					</div>
				</div>

				<div class="flex gap-4 ml-4">
					<a href="https://github.com/Laudin"
						><img class="w-6" title="GitHub" src="/github.png"
					/></a>
					<a href="https://www.linkedin.com/in/gaston-laudin/"
						><img class="w-6" title="LinkedIn" src="/linkedin.png"
					/></a>
				</div>
			</div>

			<div class="group relative">
				<div class="relative z-10 bg-neutral-800 rounded-md mt-4 text-center">
					<a class="block py-2" href="mailto:gastonlaudin@gmail.com"
						>CONTACT ME</a
					>
				</div>
				<div
					class="contact opacity-100 group-hover:opacity-100 md:opacity-0 transition-all"
				></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#about {
	scroll-margin-top: 100px;
}

@keyframes animate {
	0% {
		background-position: 0 0;
	}
	50% {
		background-position: 300% 0;
	}
	100% {
		background-position: 0 0;
	}
}
.contact {
	position: absolute;
	top: -0px;
	left: -0px;
	background: linear-gradient(
		45deg,
		#fb0094,
		#0000ff,
		#00ff00,
		#ffff00,
		#ff0000,
		#fb0094,
		#0000ff,
		#00ff00,
		#ffff00,
		#ff0000
	);
	background-size: 400%;
	width: calc(100% + 0px);
	height: calc(100% + 0px);
	z-index: 1;
	animation: animate 20s linear infinite;
	filter: blur(5px) opacity(0.2);
}

.contact:after {
	filter: blur(20px);
}
</style>
