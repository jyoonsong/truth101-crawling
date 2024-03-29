data = []
names = ["김요한", "김우석", "송형준", "이은상", "남도현", "김민규", "구정모", "한승우", "이진혁", "손동표", "차준호", "송유빈", "이한결", "조승연", "함원진", "금동현", "황윤성", "강민희", "이세진", "토니"]

video_lists = document.querySelectorAll("ul.item_list")
for (let i = 0; i < video_lists.length; i++) {
    let video_list = video_lists[i]

    let videos = video_list.querySelectorAll("li")
    for (j = 0; j < videos.length; j++) {
		video = videos[j]

		title = video.querySelector("tooltip").getAttribute("title")
            
        if (title.includes("단독")) {
            mentioned = []
            for (k = 0; k < names.length; k++)
                if (title.includes("토니"))
                    mentioned.push("토니")
                else if ( title.includes(names[k].substr(1)) )
                    mentioned.push(names[k])
    
            item = {
                "id": video.querySelector("a").href,
                "title": title,
                "timestamp": (12 - i),
                "mentioned": mentioned,
                "view_count": video.querySelector("span.hit").innerText.substr(5),
                "like_count": video.querySelector("span.like").innerText.substr(5)
            }
            data.push(item)
        }
        
        
    }
}
JSON.stringify(data)