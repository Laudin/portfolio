<script setup lang="ts" name="TechnologiesComponent">
import { ref } from "vue";

const cols = ref("1fr 1fr 1fr");
const rows = ref("1fr 1fr 1fr");

const onHover = (col: number, row: number) => {
	return;
	const newCols = cols.value.split(" ");
	const newRows = rows.value.split(" ");
	newCols[col] = "2fr";
	newRows[row] = "2fr";
	cols.value = newCols.join(" ");
	rows.value = newRows.join(" ");
};

const onLeave = () => {
	return;
	cols.value = "1fr 1fr 1fr 1fr";
	rows.value = "1fr 1fr 1fr";
};
</script>

<template>
	<div class="text-center relative my-16 md:my-8 col-span-2">
		<h1
			class="absolute z-10 -top-4 -translate-x-1/2 inline-block text-2xl font-bold bg-neutral-900 px-12"
		>
			Technologies
		</h1>

		<div class="container px-8 py-10 border border-gray-400 rounded-md">
			<div
				@mouseover="onHover(0, 0)"
				@mouseleave="onLeave"
				class="card before:bg-[#f1db4ed7]"
			>
				<div class="head">
					<h2 class="absolute left-4">Javascript</h2>
					<img src="/technologies/js.png" />
				</div>
				<p class="">
					Experienced in JavaScript, with a strong grasp of ES6+ features.
					Dedicated to understanding the inner workings of the language.
				</p>
			</div>

			<div
				@mouseover="onHover(1, 0)"
				@mouseleave="onLeave"
				class="card before:bg-[#3179c7d7]"
			>
				<div class="head">
					<h2 class="absolute left-4">Typescript</h2>
					<img src="/technologies/ts.png" />
				</div>
				<p class="">
					Debugging sometimes can be a nightmare, but TypeScript makes it so
					much easier by catching mistakes before runtime. While still keeping
					the flexibility of JavaScript.
				</p>
			</div>

			<div
				@mouseover="onHover(2, 0)"
				@mouseleave="onLeave"
				class="card before:bg-[#3f853cd7]"
			>
				<div class="head">
					<h2 class="absolute left-4">Node.js</h2>
					<img src="/technologies/node.png" />
				</div>
				<p class="">
					It’s important to know all the base knowledge Enables fast, scalable
					server-side applications with a non-blocking, event-driven
					architecture.
				</p>
			</div>

			<div
				@mouseover="onHover(3, 0)"
				@mouseleave="onLeave"
				class="card before:bg-[#00d9fed7]"
			>
				<div class="head">
					<h2 class="absolute left-4">React</h2>
					<img src="/technologies/react.png" />
				</div>
				<p class="">
					Simplifies UI development with reusable components and an efficient
					virtual DOM for smooth rendering.
				</p>
			</div>

			<div
				@mouseover="onHover(0, 1)"
				@mouseleave="onLeave"
				class="card before:bg-[#cd6698d7]"
			>
				<div class="head">
					<h2 class="absolute left-4">HTML/CSS/SASS</h2>
					<img src="/technologies/sass.png" />
				</div>
				<p class="">
					An excellent design is ideal to draw attention to your product. And
					that’s what I always aim for.
				</p>
			</div>

			<div
				@mouseover="onHover(1, 1)"
				@mouseleave="onLeave"
				class="card before:bg-[#17bfcbd7]"
			>
				<div class="head">
					<h2 class="absolute left-4">Tailwind</h2>
					<img src="/technologies/tailwind.png" />
				</div>
				<p class="">
					My first go to styling tool, making it easy to create modern and
					consistent designs.
				</p>
			</div>

			<div
				@mouseover="onHover(2, 1)"
				@mouseleave="onLeave"
				class="card before:bg-[#e1224ed7]"
			>
				<div class="head">
					<h2 class="absolute left-4">NestJS</h2>
					<img src="/technologies/nest.png" />
				</div>
				<p class="">
					My prefered option for the backend since it offers a structured
					framework for building scalable and maintainable applications.
				</p>
			</div>

			<div
				@mouseover="onHover(3, 1)"
				@mouseleave="onLeave"
				class="card before:bg-[#0c344bd7]"
			>
				<div class="head">
					<h2 class="absolute left-4">Prisma</h2>
					<img src="/technologies/prisma.png" />
				</div>
				<p class="">
					Quite easy to use and setup. An intuitive ORM with type safety, and
					auto-generated queries.
				</p>
			</div>

			<div
				@mouseover="onHover(3, 1)"
				@mouseleave="onLeave"
				class="card before:bg-[#0c344bd7]"
			>
				<div class="head">
					<h2 class="absolute left-4">Vue 3</h2>
					<img src="/technologies/vue.png" />
				</div>
				<p class="">
					I’m starting to love Vue beacause it combines reactivity, simplicity,
					and a strong ecosystem to build interactive web applications
					efficiently.
				</p>
			</div>

			<div class="card md:col-span-1">
				<div class="head">
					<h2 class="absolute left-4">And more..</h2>
					<svg
						class="bg-green-100 rounded-md px-1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 40 40"
						width="40px"
						height="40px"
					>
						<defs>
							<linearGradient
								gradientUnits="userSpaceOnUse"
								x1="22.701"
								y1="0"
								x2="22.701"
								y2="45.403"
								id="gradient-3"
								spreadMethod="pad"
							>
								<stop offset="0" style="stop-color: rgb(98, 0, 255)"></stop>
								<stop offset="1" style="stop-color: rgb(255, 135, 135)"></stop>
							</linearGradient>
							<linearGradient
								gradientUnits="userSpaceOnUse"
								x1="34.688"
								y1="11.122"
								x2="34.688"
								y2="26.36"
								id="gradient-0"
							>
								<stop
									offset="0"
									style="stop-color: rgb(38.431% 0% 100%)"
								></stop>
								<stop offset="1" style="stop-color: rgb(255, 135, 135)"></stop>
							</linearGradient>
							<linearGradient
								gradientUnits="userSpaceOnUse"
								x1="19.946"
								y1="8.583"
								x2="19.946"
								y2="28.9"
								id="gradient-1"
							>
								<stop
									offset="0"
									style="stop-color: rgb(38.431% 0% 100%)"
								></stop>
								<stop offset="1" style="stop-color: rgb(255, 135, 135)"></stop>
							</linearGradient>
							<linearGradient
								gradientUnits="userSpaceOnUse"
								x1="5.218"
								y1="11.122"
								x2="5.218"
								y2="26.36"
								id="gradient-2"
							>
								<stop
									offset="0"
									style="stop-color: rgb(38.431% 0% 100%)"
								></stop>
								<stop offset="1" style="stop-color: rgb(255, 135, 135)"></stop>
							</linearGradient>
						</defs>
						<path
							d="M 17.646 28.9 L 22.246 8.583"
							stroke-linecap="round"
							style="stroke-width: 4px; fill: none; stroke: url(#gradient-1)"
						></path>
						<path
							d="M 31.444 26.36 L 37.645 19.514 C 38.029 19.087 38.029 18.396 37.645 17.969 L 31.444 11.122"
							stroke-linecap="round"
							stroke-linejoin="round"
							style="stroke-width: 4px; fill: none; stroke: url(#gradient-0)"
						></path>
						<path
							d="M 8.449 11.122 L 2.292 17.924 C 1.884 18.375 1.884 19.108 2.292 19.556 L 8.449 26.36"
							stroke-linecap="round"
							stroke-linejoin="round"
							style="stroke-width: 4px; fill: none; stroke: url(#gradient-2)"
						></path>
						<g
							transform="matrix(0.881115, 0, 0, 0.880999, -32.601585, 11.328201)"
						></g>
					</svg>
				</div>
				<p class="">
					There’s always something new to explore and learn in the ever-evolving
					tech landscape.
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: grid;
	gap: 28px 20px;
	grid-template: v-bind(rows) / v-bind(cols);
	transition: grid-template 300ms ease-in-out;
}

.head {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
	.container {
		grid-template: repeat(5, 1fr) / repeat(2, 50%);
	}
	.head {
		flex-direction: column;
	}
	.head h2 {
		position: relative;
		margin-bottom: 8px;
		left: 0;
	}
	.card p {
		padding: 0;
	}
}

.card {
	position: relative;
	/* transition: all 1s ease-in-out; */
	padding: 10px;
	border-radius: 5px;
	z-index: 10;
}

.card::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	top: -0px;
	left: -0px;
	z-index: -1;
	background: #262626;
	border-radius: 10px;
	/* box-shadow: -4px -4px 6px 0px rgb(27, 27, 27); */
}

.card::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	top: -8px;
	left: -8px;
	z-index: -2;
	border-radius: 10px;
	transition: all 0.1s ease-in-out;
}

.card:hover::before {
	top: -5px;
	left: -5px;
}

p {
	font-size: 12px;
	padding-right: 40px;
	color: #bdbcbc;
	text-align: start;
}
h2 {
	font-size: 16px;
	font-weight: bold;
	color: white;
}

img {
	width: 40px;
	border-radius: 4px;
	/* position: absolute;
	top: -5px;
	right: -5px; */
}
</style>
