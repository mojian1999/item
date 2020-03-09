<template>
	<div>
		<!-- 标题 -->
		<div class="cons">
			<div>
				 <h3 class="faxian-title">发现</h3>
			</div>
			<!-- 子路由 -->
			<div class="con">
				  <router-link to="/About/Discover-1">
					  推荐
				  </router-link>
				  <router-link to="/About/Discover-2">
					  关注
				  </router-link>
				  <router-link to="/About/Discover-3">
					  同城
				  </router-link>
			</div>
		</div>
		<div style="width: 100%;height: 90px;"></div>
			<router-view></router-view>
	</div>
</template>
<script>
	
</script>
<style scoped="scoped" lang="scss">
	.cons{
		position: fixed;
		width: 100%;
		background: white;
	}
	a{
		text-decoration: none;
	}
	.faxian-title{
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	.con{
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
		height: 35px;
		a {
		  font-weight: bold;
		  color: #2c3e50;
		  &.router-link-exact-active {
		    color:darkblue;
			border-bottom:2px solid darkblue;
		  }
		}
	}
</style>
	
	
	