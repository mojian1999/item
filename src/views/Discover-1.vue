<template>
		<div class="divAll">
			<div v-for="(item,index) in datas" :key="index" class="div">
				<div class="divs">
					<img v-if="item.tre_img" :src="item.tre_img[0].url"  class="img-1" />
					<div class="div-2"><p class="span-1">{{item.tre_descr}}</p></div>
					<div v-if="item.user.name" class="div-3">
						<img :src="item.user.headimgurl[0].url" class="img-2">
						<span class="span-2">{{item.user.name}}</span>
						<span class="span-3">{{item.goodCnt}}</span>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'faxian',
		data: function() {
			return {
				datas:[]
			}
		},
		mounted: function() {
			var pid = parseInt(this.$route.params.pro_id),
				params = new URLSearchParams()
			params.append('pro_id', pid)
			params.append('fid', '')
			axios.post("https://www.jvhv.com/siteindex.php/Trends/Index.html", params).then((res) => {
				this.datas = res.data.data.list;
				console.log(this.datas)
			})
		}
	}
</script>
	
<style lang="scss" scoped="scoped">
	.divAll{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.625rem;
		.div{
			width: 48%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.divs{
				margin-left: 10px;
				margin-top: 1.25rem;
				.img-1{	
				width: 100%;
				height: 15rem;
				border-radius: 5px;
			}
				.div-2{
					height: 1.25rem;
					margin-top: 0.5rem;
					margin-bottom: 0.5rem;
					p{
						width: 100%;
						height: 1.25rem;
						overflow: hidden;
						text-overflow: ellipsis;
					}
			}
			
				.div-3{
					display: flex;
					justify-content: space-between;
					.img-2{
						width: 2rem;
						height: 2rem;
					}
					
					.span-2{
						margin-top: 4%;
						margin-right: 28%;
					}
					
					.span-3{
						margin-top: 4%;
					}
				}
			}
		}
		
	
			
	
	}
</style>
