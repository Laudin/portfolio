<script setup lang="ts" name="HeroComponent"></script>

<template>
	<div id="hero" class="h-[80vh] flex items-center">
		<div class="pl-8 ml-8 md:ml-0 font-bold border-l border-white">
			<h2 class="text-xl">Hi,</h2>
			<h1 class="text-5xl font-roboto!">I`m Gastón Laudin</h1>
			<h1 class="text-5xl mt-4 mb-8">
				<span class="">Full Stack</span> Developer
			</h1>

			<button class="btn" role="button">
				<a
					href="https://www.linkedin.com/in/gaston-laudin/"
					class="text-orange-400 text-lg"
					>LinkedIn</a
				>
			</button>
		</div>
	</div>
</template>

<style scoped>
#hero {
	scroll-margin-top: 100px;
}
@keyframes change {
	0% {
		color: rgb(206, 44, 44);
	}
	25% {
		color: rgb(240, 240, 98);
	}
	50% {
		color: rgb(58, 58, 230);
	}
	100% {
		color: rgb(72, 187, 72);
	}
}
span {
	animation: change 4s alternate infinite;
}

.btn {
	all: unset;
	width: 100px;
	height: 30px;
	font-size: 16px;
	background: transparent;
	border: none;
	position: relative;
	color: #f0f0f0;
	cursor: pointer;
	z-index: 1;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
}

.btn::before {
	content: "";
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: -99999;
	transition: all 0.4s;
}

.btn::before {
	transform: translate(0%, 0%);
	width: 100%;
	height: 100%;
	background: #272627;
	border-radius: 10px;
}

.btn:hover::before {
	transform: translate(5%, 20%);
	width: 110%;
	height: 110%;
}
</style>
