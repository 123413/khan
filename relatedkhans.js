var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>
					  &quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
				  </b:loop></b:if>];
			  var relatedPostConfig = {
				  homePage: &quot;<data:blog.homepageUrl/>&quot;,
				  widgetTitle: &quot;&lt;h4&gt;Related Posts :&lt;/h4&gt;&quot;,
				  numPosts: 5,
				  summaryLength: 140,
				  titleLength: &quot;auto&quot;,
				  thumbnailSize: 60,
				  noImage: &quot;http://3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/w60-h60-c/no-image.png&quot;,
				  containerId: &quot;related-post&quot;,
				  newTabLink: false,
				  moreText: &quot;Read More...&quot;,
				  widgetStyle: 2,
				  callBack: function() {}
			  };
