import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const VeriLoad = () =>{
const{contextSafe} = useGSAP()

const addgsap = contextSafe(() =>{
gsap.from('.marquee .scrolling-images',{
  scale:0,
  y:121,
  duration:.7,
  stagger:.2,
  ease:"back.out"
})
})  

useGSAP(()=>{
 addgsap() 
})
  

 return(
    <header className="marquee">
    <div className="scrolling-images">
      <img src="https://i.pinimg.com/736x/0d/de/f5/0ddef5002d19cbc17dcc89b0b71fe4cd.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/76/e0/cb/76e0cb90c3ed388be54eb8c5a877cfe7.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/b0/7f/72/b07f723cbfc29a99191adcb9196a60f3.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/92/4a/3b/924a3b5cf2854715d83e0b2100a531ed.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/67/6c/6f/676c6f512a01c39ee7743b146fa787fb.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/3d/33/6f/3d336fe2569dd258828e9957448f7521.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/5c/f4/d6/5cf4d63e850d8ef51481bb1e0ee181ff.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/83/f2/80/83f28001d70648b7dd321cc5e4538f9d.jpg   " alt="" />
    </div>

    <div className="scrolling-images" style={{marginTop : "2%"}}>
      <img src="https://i.pinimg.com/1200x/63/68/d5/6368d5eb67361d71e6236ff2136cb36b.jpg" style={{animation : "ss2 20s linear infinite"}}/>
      <img src="https://i.pinimg.com/736x/8f/f4/b5/8ff4b5746d1b76d216322a1a8c980692.jpg" style={{animation : "ss2 20s linear infinite"}}/>
      <img src="https://i.pinimg.com/1200x/00/64/62/006462dc68b1598e1f6c9f6e254f818f.jpg" style={{animation : "ss2 20s linear infinite"}}/>
      <img src="https://i.pinimg.com/1200x/72/d2/46/72d2463b601c0771ad0367d14f8e7497.jpg" style={{animation : "ss2 20s linear infinite"}}/>
      <img src="https://i.pinimg.com/1200x/68/96/75/6896757eadbcdeec9ff8d19262a9d2c3.jpg" style={{animation : "ss2 20s linear infinite"}}/>
      <img src="https://i.pinimg.com/1200x/ed/1a/be/ed1abea4a5ac353aeba358cfc22cde22.jpg" style={{animation : "ss2 20s linear infinite"}}/>
      <img src="https://i.pinimg.com/1200x/d7/d2/c2/d7d2c26e22a5b07681e2ac0b7cc0e26a.jpg" style={{animation : "ss2 20s linear infinite"}}/>
      <img src="https://i.pinimg.com/736x/0c/e6/a2/0ce6a289751b017284a5c11062254483.jpg" style={{animation : "ss2 20s linear infinite"}}/>
    </div>

    <div className="scrolling-images" style={{marginTop : "2%"}}>
      <img src="https://i.pinimg.com/1200x/c4/5e/16/c45e16d585f5bc4464d8af7c192ee926.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/02/22/c0/0222c0c6912ae4b1a995aa98c2470084.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/c7/80/b7/c780b754f4605b149106dba98c7912fa.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/cc/88/66/cc88664241e5c7bd53c487e18a614af1.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/6b/15/a8/6b15a852c147d4e2d05d1f23bf25b092.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/5e/c3/88/5ec3886b069770c52f33d8e0e2684824.jpg" alt="" />
      <img src="https://i.pinimg.com/1200x/96/62/01/9662011571a1bf93a366e4ebbf9d8afd.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/14/9b/e7/149be70953b7ec9ca869f7ad4dd36f8b.jpg" alt="" />
    </div>
      </header>
 )   
}