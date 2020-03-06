<template>
  <div id="app">
    <div id="nav">	
      <router-link to="/"><img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" ><div>首页</div></router-link>              
	   <router-link to="/about"><img src="https://www.jvhv.com/wap/static/images/footer_6.png" ><div>发现</div></router-link>          
	  <router-link to="/Mine"><img src="https://www.jvhv.com/wap/static/images/footer_8.png" ><div>消息</div></router-link>
	  <router-link to="/Me"><img src="https://www.jvhv.com/wap/static/images/footer_5.png" ><div>我的</div>	</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
	
	*{
		margin: 0;
		padding: 0;
	}
	
	
#nav {
	display: flex;
	position: fixed;
	-webkit-transform: translateZ(0);
	top: 93%;
	background: #F1F1F1;
	width: 100%;
	height: 30%;
	margin-bottom: 2rem;
	z-index: 998;

		
		img{
			margin-left: 3rem;
			width: 1.85rem;
			height: 1.85rem;
			margin-top: 0.2rem;
		}
		div{
			margin:-0.525rem;
			font-size: 0.7rem;
			margin-left: 3.15rem;
		}
}



a{
	text-decoration:none;
	color:#333;
	}
	
	

</style>

