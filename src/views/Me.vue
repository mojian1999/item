<template>
	<div>
		<div class="all">
			<img src="https://www.jvhv.com/wap/static/images/touXiang.svg"/>
			<div class="div-1">
				<h2>未登录</h2>
				<p>加入加减号0天</p>
			</div>
			<div class="div-2">设置</div>
		</div>
		<div class="datas">我的服务</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
	.all{
		// width: 100%;
		height: 5rem;
		background: #005BAC;
		display: flex;
		padding: 5rem 12px 15px 12px;
		img{
			width: 3.125rem;
			height: 3.125rem;
			background: white;
			border-radius: 50%;
		}
		
		.div-1{
			color: white;
			margin-left: 2%;
			p{
				font-size: 0.875rem;
			}
		}
		
		.div-2{
			margin-left: 48%;
			font-size: 1rem;
			color: white;
		}
	}
	
	.datas{
		font-size: 1.25rem;
		padding: 0.625rem;
	}
</style>
