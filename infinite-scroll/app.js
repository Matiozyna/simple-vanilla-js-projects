
class InfiniteScroll {
    constructor(container, loader) {
        this.container = container;
        this.loader = loader;
        this.loading = false;
        this.currentPage = 0;
        this.init();

    }
    init(){
        window.onload = this.getData;
        window.addEventListener("scroll", () => {
            if(window.scrollY + window.innerHeight >= document.body.offsetHeight && !this.loading){
                this.setLoading(true);
                this.getData();
            }
        })
    }

    getData = async () => {
        this.currentPage++;
        const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${this.currentPage}&_limit=4`;
        try{
            const res = await fetch(apiUrl);
            const photosArray = await res.json();
            this.displayPosts(photosArray);
        }catch(err){
            console.log(err);
        }
    }

    displayPosts(posts){
        this.container.innerHTML += posts.map(post => {
            return(`
            <div class="post">
                <h3>${this.capitalizeFirstLetter(post.title)}</h3>
                <p>${this.capitalizeFirstLetter(post.body)}</p>
            </div>            
            `)
        }).join("");
        this.setLoading(false);
    }

    capitalizeFirstLetter(str){
        return str[0].toUpperCase() + str.slice(1)
    }

    setLoading(flag){
        if(flag){
            this.loader.classList.remove("hidden");
        }else{
            this.loader.classList.add("hidden")
        }
        this.loading = flag;
    }
}

const iScroll = new InfiniteScroll(document.querySelector(".container"),
            document.querySelector(".loader-box"));