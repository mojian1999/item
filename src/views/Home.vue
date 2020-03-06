<template>
	<div>
		<div class="myhead">
				<span>厦门</span><input type="text" value="" placeholder="   输入搜索关键词" />
			</div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="https://img.jvhv.com/images/201908/5d5f44fba0a1b.png"></div>
		        <div class="swiper-slide"><img src="https://img.jvhv.com/images/201909/5d774e055c02e.jpg"></div>
		        <div class="swiper-slide"><img src="https://img.jvhv.com/images/201909/5d79e7e251a52.jpg"></div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
		<div class="vwz"></div>
		<div class="imgs">
			<!-- <div  v-for="(itemsz,index) in imgall" :key="index">
				<img :src="itemsz.imger" alt="11"/>
			</div> -->
			<div class="imgz">
				<img src="../img/gaoerfu.png"/>
				<img src="../img/jianshen.png" />
				<img src="../img/youyong.png" />
				<img src="../img/lanqiu.png" />
				<img src="../img/yujia.png" />
				<span>高尔夫</span><span>健身</span><span>游泳</span><span>篮球</span><span>瑜伽</span>
			</div>
			<div class="imgt">
				<img src="../img/wangqiu.png" />
				<img src="../img/quanji.png" />
				<img src="../img/yumaoqiu.png" />
				<img src="../img/pingpangqiu.png" />
				<img src="../img/zuqiu.png" />
				<span>网球</span><span>拳击</span><span>羽毛球</span><span>乒乓球</span><span>足球</span>
			</div>
			
		</div>
		<div class="vv"></div>
		<div class="titles">为您精选</div>
		<div class="sijiaoke">
			<div class="sijiao1">
				<img src="https://img.jvhv.com/images/201908/5d5cbfbe93e02.png"/>
				<h4>健身私教课</h4>
				<span>484人已参加</span>
			</div>
			<div class="sijiao2">
				<img src="https://img.jvhv.com/images/201908/5d5cb669985de.png" />
				<h4>增肌六节课速成</h4>
				<span>0人已参加</span>
			</div>
			<div class="sijiao3">
				<img src="https://img.jvhv.com/images/201908/5d4965e65150b.jpg" />
				<h4>中考冲刺班</h4>
				<span>0人已参加</span>
			</div>
			<div class="sijiao4">
				<img src="https://img.jvhv.com/images/201908/5d5b9c9a45846.png" />
				<h4>成人私教课</h4>
				<span>2人已参加</span>
			</div>
		</div>
		<div class="vv"></div>
		<div>
			<div class="tops">
				<div class="h">本周最受欢迎TOP5</div>
				<ul class="top5">
					<li v-for="(item,index) in iconList" :key="index">
						<div class="datay">
								<div><img :src="item.pro_img[0].url" /></div>
							<div class="datas">
								<div>{{item.pro_name}}</div>
								<div class="zzz">{{item.pro_Joiner}}人已参加</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="vvv"></div>
		<div style="height: 2.9rem;"></div>
	</div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper';
  import axios from 'axios';
  
  
  export default {
	  name:"Home",
	  data:function(){
	  	return {
	  		iconList:[],
			// imgall:[
			// 	{"name":"高尔夫",image:require('../img/gaoerfu.png"')},
			// 	{"name":"健身","imger":"../img/jianshen.png"},
			// 	{"name":"游泳","imger":"../img/youyong.png"},
			// 	{"name":"篮球","imger":"../img/lanqiu.png"},
			// 	{"name":"瑜伽","imger":"../img/yujia.png"},
			// 	{"name":"网球","imger":"../img/wangqiu.png"},
			// 	{"name":"拳击","imger":"../img/quanji.png"},
			// 	{"name":"羽毛球","imger":"../img/yumaoqiu.png"},
			// 	{"name":"乒乓球","imger":"../img/pingpangqiu.png"},
			// 	{"name":"足球","imger":"../img/zuqiu.png"}
			// ],
			
	  	}
	  },
		mounted:function(){
		  new Swiper ('.swiper-container', {
			loop: true,
			autoplay : 2000,
			pagination: '.swiper-pagination',
		  }),
		  
		  
		  
		  
		  		//获取数据
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((data)=>{
				this.iconList = data.data.data.CourseTop5
				console.log(this.iconList)
				
			})
		}
		  	
		  
		}
		
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	
	a{
	text-decoration:none;
	color:#333;
	}
	.swiper-container {
	    width: 100%;
		--swiper-theme-color: #FFFFFF;
	
	} 
	 
	 .swiper-wrapper img{
	     width:100%;
	 }  
	 
	 
	 .myhead{
	 	 background: #000066;
	 }
	 
	 .myhead span{
		 display: inline-block;
		 color: white;
		 margin: 0.8rem;
	 }
	 
	 .myhead input{
		 width: 17rem;
		 height: 1.7rem;
		 margin-left: 0.625rem;
		 border-radius: 0.4rem;
	 }
	 
	 .imgs{
		 width: 100%;
		 height: 10rem;
		 margin-top: 1rem;
	 }
	 
	 .imgz img{
		 width: 2.5rem;
		 height: 2.5rem;
		 margin-left: 1.4rem;
		 margin-right: 0.5rem;
	 }
	 
	 .imgz img{
	 		 width: 2.5rem;
	 		 height: 2.5rem;
	 		 margin-left: 1.4rem;
	 		 margin-right: 0.5rem;
	 }
	 
	 
	 .imgt img{
	 		 width: 2.5rem;
	 		 height: 2.5rem;
	 		 margin-left: 1.4rem;
	 		 margin-right: 0.5rem;
	 }
	 
	 .imgz span{
		 display: inline-block;
		 font-size: 1rem;
		 margin-left: 1.2rem;
	 }
	 
	 .imgz span:nth-of-type(1){
		 margin-right: 0.7rem;
	 }
	 
	 .imgz span:nth-of-type(2){
	 	margin-right: 1.1rem;
	 }
	 
	 .imgz span:nth-of-type(3){
	 	margin-right: 1.27rem;
	 }
	 
	 .imgz span:nth-of-type(4){
	 	margin-right: 1.05rem;
	 }
	 
	 
	 
	 .imgt{
		 margin-top:1rem;
	 }
	 .imgt span{
	 		 display: inline-block;
	 		 font-size: 1rem;
	 		 margin-left: 1.6rem;
			 
	 }
	 
	 .imgt span:nth-of-type(1){
	 		 margin-right: 0.7rem;
	 }
	 
	 .imgt span:nth-of-type(2){
	 	margin-right: 0.3rem;
	 }
	 
	 .imgt span:nth-of-type(4){
	 	margin-right: 0.25rem;
	 }
	 
	 .vv{
		 width: 100%;
		 height: 0.625rem;
		 background: #EAEAEA;
	 }
	 
	 .vwz{
		 width: 100%;
		 height: 0.625rem;
		 background: #EAEAEA;
		 margin-top: -0.4rem;
	 }
	 
	 .titles{
		 font-size: 1.25rem;
		 margin: 1rem;
		 margin-top: 1.4rem;
		  margin-bottom: 1.4rem;
	 }
	 .sijiaoke{
		 display: flex;
		 flex-wrap: wrap;
	 }
	 .sijiaoke img{
		 width: 10.3125rem;
		 height: 6.875rem;
		 border-radius: 10px;
	 }
	 .sijiaoke div{
			margin-left: 1rem;
			
	 }
	 
	 .sijiaoke span{
	 	font-size: 0.625rem;
		color: #8c8c8c;
		position: relative;
		bottom: 0.3rem;
	 }
	 
	 .tops{
	 	width: 94%; 
		height:25rem; 
		background: #004b9e; 
		border-radius: 7px; 
		margin: auto;
	 	margin-top:1.25rem;
	 }

	 
	 .tops img{
		 width: 6.25rem;
		 height: 4rem;
		 margin: 0.625rem;
	 }
	 
	 .h{
		 color: #ffffff;
		 
	 }
	 
	 .tops li{
		 list-style: none;
		 height: 5.2rem;
		 
	 }
	 
	 .tops ul{
		 background: #ffffff;
		 width: 18rem;
		 height: 21.1rem;
		 margin: 2rem;
		 border-radius: 0.3125rem;
	 }
	 .datay{
		display: flex;
		border-bottom: 0.4px solid #8c8c8c;

	 }
	 .datas{
		 margin-top: 1.25rem;
	 }
	 
	 .zzz{
		 font-size: 0.625rem;
		 color: #8c8c8c;
	 }
	 
	 .vvv{
		 width: 100%;
		 height: 0.625rem;
		 background: #EAEAEA;
		 margin-top: 1.875rem;
	 }
	 
	 .h{
		 margin-left: 3rem;
		 font-size: 1.4rem;
		 position: relative;
		 top: 1.4rem;
	 }
	 
</style>
