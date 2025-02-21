<script setup lang="ts" name="HamburguerComponent">
const props = defineProps({
	open: Boolean,
});
</script>

<template>
	<div class="hamburger" :class="{ open: props.open, close: !props.open }">
		<div class="bar">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>
	</div>
</template>

<style scoped>
@keyframes bar1-open {
	0% {
		transform: rotate(0);
		top: 0%;
	}
	50% {
		transform: rotate(0);
		top: 8px;
	}
	100% {
		transform: rotate(45deg);
		top: 8px;
	}
}
@keyframes bar1-close {
	0% {
		transform: rotate(45deg);
		top: 0;
	}
	50% {
		transform: rotate(0);
		top: 0;
	}
	100% {
		transform: rotate(0);
		top: 0;
	}
}
@keyframes bar2-open {
	0% {
		transform: rotate(0);
	}
	50% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(-45deg);
	}
}
@keyframes bar2-close {
	0% {
		transform: rotate(-45deg);
	}
	50% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(0);
	}
}
@keyframes bar3-open {
	0% {
		top: 16px;
		opacity: 1;
	}
	50% {
		top: 8px;
		opacity: 1;
	}
	100% {
		top: 8px;
		opacity: 0;
	}
}
@keyframes bar3-close {
	0% {
		top: 8px;
		opacity: 0;
	}
	50% {
		top: 8px;
		opacity: 1;
	}
	100% {
		top: 16px;
		opacity: 1;
	}
}

.hamburger {
	position: relative;
	cursor: pointer;
	user-select: none;
	outline: none;
	z-index: 10;
}
.hamburger .bar {
	position: relative;
	width: 30px;
	height: 20px;
	border-radius: 9em;
}
.bar div {
	position: absolute;
	width: 30px;
	height: 2px;
	background: white;
}
.bar1 {
	top: 0;
}
.bar2 {
	top: 8px;
}
.bar3 {
	top: 16px;
}

.hamburger.open .bar1 {
	animation: bar1-open 0.3s forwards;
}
.hamburger.open .bar2 {
	animation: bar2-open 0.3s forwards;
}
.hamburger.open .bar3 {
	animation: bar3-open 0.3s forwards;
}

.hamburger.close .bar1 {
	animation: bar1-close 0.3s forwards;
}
.hamburger.close .bar2 {
	animation: bar2-close 0.3s forwards;
}
.hamburger.close .bar3 {
	animation: bar3-close 0.3s forwards;
}
</style>
