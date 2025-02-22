<script setup lang="ts" name="TechnologiesComponent">
import { ref } from "vue";
import CodeIcon from "./assets/CodeIcon.vue";

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
				class="card before:bg-[#40b983d7]"
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
					<CodeIcon />
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
