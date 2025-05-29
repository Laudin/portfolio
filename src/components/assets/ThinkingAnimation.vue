<template>
	<div class="thinking-dots">
		Thinking
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</div>
</template>

<style scoped>
.thinking-dots {
	display: flex;
	font-size: 14px;
	align-items: end;
	margin-left: 24px;
	gap: 3px;
	padding: 8px 0;
	color: #9ca3af;
}

.dot {
	margin-bottom: 5px;
	width: 3px;
	height: 3px;
	background-color: #9ca3af;
	border-radius: 50%;
	animation: bounce 1.4s infinite ease-in-out;
}

.dot:nth-child(1) {
	animation-delay: -0.32s;
}

.dot:nth-child(2) {
	animation-delay: -0.16s;
}

.dot:nth-child(3) {
	animation-delay: 0s;
}

@keyframes bounce {
	0%,
	80%,
	100% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-4px);
	}
}
</style>
