
/* AgriLedger premium 3D farm scene. Visual-only; no app data or routes. */
(() => {
  "use strict";
  const start = () => {
    const host = document.getElementById("farm3dScene");
    if (!host || !window.THREE || host.dataset.ready === "1") return;
    host.dataset.ready = "1";
    const T = window.THREE;
    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(34, 1, .1, 100);
    camera.position.set(8.6, 6.2, 10.5);
    camera.lookAt(0, .25, 0);
    const renderer = new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:"high-performance"});
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.7));
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    host.replaceChildren(renderer.domElement);

    scene.add(new T.HemisphereLight(0xdcebd2,0x25382a,2.15));
    const key = new T.DirectionalLight(0xffe5bd,3.1);
    key.position.set(-5,10,7); key.castShadow=true;
    key.shadow.mapSize.set(1024,1024); scene.add(key);
    const rim = new T.DirectionalLight(0x8fcf91,1.5);
    rim.position.set(6,4,-7); scene.add(rim);

    const mat=(color,roughness=.85,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
    const soil=mat(0x594330), rock=mat(0x35443a), grass=mat(0x587b45), grass2=mat(0x789b55);
    const trunk=mat(0x694b32), leaf=mat(0x416d3e), leaf2=mat(0x6f9b50), path=mat(0xb9a47d);
    const island=new T.Group(); scene.add(island);

    // Stratified floating landform.
    const top=new T.Mesh(new T.CylinderGeometry(4.45,4.15,.48,12,1),soil);
    top.position.y=.12; top.castShadow=true; top.receiveShadow=true; island.add(top);
    const turf=new T.Mesh(new T.CylinderGeometry(4.43,4.4,.13,12),grass);
    turf.position.y=.42; turf.receiveShadow=true; island.add(turf);
    const middle=new T.Mesh(new T.CylinderGeometry(4.13,3.25,1.15,11,1),rock);
    middle.position.y=-.65; middle.rotation.y=.12; middle.castShadow=true; island.add(middle);
    const underside=new T.Mesh(new T.ConeGeometry(3.25,2.2,10),soil);
    underside.position.y=-2.25; underside.rotation.y=.15; underside.castShadow=true; island.add(underside);
    // Rock facets around the cliff edge.
    for(let i=0;i<26;i++){
      const a=i/26*Math.PI*2, r=3.8+Math.random()*.42;
      const m=new T.Mesh(new T.DodecahedronGeometry(.22+Math.random()*.28,0),i%3?rock:soil);
      m.position.set(Math.cos(a)*r,-.75-Math.random()*.72,Math.sin(a)*r);
      m.rotation.set(Math.random(),Math.random(),Math.random()); m.castShadow=true; island.add(m);
    }

    // Meandering pale farm track.
    const trackPts=[new T.Vector3(-3.3,.51,1.6),new T.Vector3(-2.3,.51,.85),new T.Vector3(-1.1,.51,.5),new T.Vector3(.1,.51,-.05),new T.Vector3(1.4,.51,-.65),new T.Vector3(2.4,.51,-1.5)];
    const curve=new T.CatmullRomCurve3(trackPts);
    const track=new T.Mesh(new T.TubeGeometry(curve,48,.105,8,false),path);
    island.add(track);

    // Crop beds with small rows and alternating leafy crops.
    const bedMat=mat(0x3c5834), stemMat=mat(0x75994b), leafMat=mat(0x81a951);
    for(let row=0;row<4;row++){
      const z=.65+row*.48;
      const bed=new T.Mesh(new T.BoxGeometry(2.65,.055,.31),bedMat);
      bed.position.set(-1.15,.52,z); island.add(bed);
      for(let c=0;c<10;c++){
        const x=-2.35+c*.265;
        const plant=new T.Group();
        const stem=new T.Mesh(new T.CylinderGeometry(.018,.025,.26,5),stemMat);
        stem.position.y=.14; plant.add(stem);
        for(let j=0;j<3;j++){
          const l=new T.Mesh(new T.SphereGeometry(.105,7,6),j%2?leafMat:leaf);
          l.scale.set(1.35,.38,.7); l.position.set((j-1)*.075,.2+(j%2)*.04,(j-1)*.025); plant.add(l);
        }
        plant.position.set(x,.55,z+(Math.random()-.5)*.08); island.add(plant);
      }
    }
    // Tomato crop patch with ripe fruit.
    const tomato=mat(0xb94f3d,.42), tomatoLeaf=mat(0x527e3d);
    for(let r=0;r<2;r++) for(let c=0;c<4;c++){
      const x=-3.1+c*.32,z=2.1+r*.38;
      const stem=new T.Mesh(new T.CylinderGeometry(.025,.035,.42,5),stemMat);
      stem.position.set(x,.76,z); island.add(stem);
      for(let k=0;k<2;k++){
        const fruit=new T.Mesh(new T.SphereGeometry(.095,12,10),tomato);
        fruit.position.set(x+(k?-.1:.1),.72+(k*.12),z+.03); fruit.castShadow=true; island.add(fruit);
      }
      const foliage=new T.Mesh(new T.SphereGeometry(.19,8,7),tomatoLeaf);
      foliage.scale.set(1.25,.4,.8); foliage.position.set(x,.91,z); island.add(foliage);
    }

    // Greenhouse: glass walls, dark metal frame, pitched roof.
    const greenhouse=new T.Group();
    const glass=new T.MeshStandardMaterial({color:0x9fc9b3,transparent:true,opacity:.25,roughness:.18,metalness:.12,side:T.DoubleSide});
    const frame=mat(0x526d57,.48,.18);
    const box=new T.Mesh(new T.BoxGeometry(1.75,.9,1.3),glass); box.position.y=.98; greenhouse.add(box);
    const roof=new T.Mesh(new T.ConeGeometry(1.18,.72,4),glass); roof.position.y=1.75; roof.rotation.y=Math.PI/4; roof.scale.set(1,.72,.83); greenhouse.add(roof);
    const beam=(x,y,z,w,h,d)=>{const o=new T.Mesh(new T.BoxGeometry(w,h,d),frame);o.position.set(x,y,z);greenhouse.add(o);};
    [-.86,0,.86].forEach(x=>beam(x,.96,-.64,.035,1.12,.035));
    [-.86,0,.86].forEach(x=>beam(x,.96,.64,.035,1.12,.035));
    beam(0,.47,0,1.8,.045,1.34);
    beam(0,1.48,0,1.82,.035,1.36);
    greenhouse.position.set(-2.0,.48,-1.55); greenhouse.rotation.y=.12; island.add(greenhouse);

    // Compact farmhouse with warm roof.
    const house=new T.Group(), wall=mat(0xc9c6a9), roofMat=mat(0x76513b), dark=mat(0x263d39,.35);
    const walls=new T.Mesh(new T.BoxGeometry(1.35,.95,1.12),wall); walls.position.y=.98; walls.castShadow=true; house.add(walls);
    const hroof=new T.Mesh(new T.ConeGeometry(1.08,.72,4),roofMat); hroof.position.y=1.78; hroof.rotation.y=Math.PI/4; hroof.scale.set(1,.8,.9); house.add(hroof);
    const door=new T.Mesh(new T.BoxGeometry(.27,.62,.035),trunk); door.position.set(.22,.79,.58); house.add(door);
    const win=new T.Mesh(new T.BoxGeometry(.28,.25,.035),dark); win.position.set(-.38,1.1,.58); house.add(win);
    house.position.set(1.95,.48,-1.55); house.rotation.y=-.28; island.add(house);

    // Trees with layered, softly irregular crowns.
    function tree(x,z,s=1){
      const g=new T.Group();
      const t=new T.Mesh(new T.CylinderGeometry(.09*s,.15*s,.95*s,7),trunk);t.position.y=.48*s;t.castShadow=true;g.add(t);
      [[0,1.12,.52],[-.25,1.42,.39],[.24,1.43,.4],[0,1.72,.31]].forEach((p,i)=>{
        const crown=new T.Mesh(new T.IcosahedronGeometry(p[2]*s,1),i%2?leaf2:leaf);
        crown.position.set(p[0]*s,p[1]*s,0);crown.scale.set(1,.88,1);crown.castShadow=true;g.add(crown);
      });
      g.position.set(x,.49,z);island.add(g);return g;
    }
    const trees=[tree(-3.15,-2.25,1.05),tree(3.05,-2.35,.78),tree(-3.45,.2,.63)];

    // Solar array.
    const solar=new T.Group(), metal=mat(0x8c9b8d,.35,.55);
    const leg=new T.Mesh(new T.CylinderGeometry(.035,.045,.55,6),metal);leg.position.y=.78;solar.add(leg);
    const panel=new T.Mesh(new T.BoxGeometry(.9,.055,.62),mat(0x173c50,.28,.55));panel.position.y=1.06;panel.rotation.x=-.16;solar.add(panel);
    for(let i=0;i<4;i++){const line=new T.Mesh(new T.BoxGeometry(.012,.008,.59),metal);line.position.set(-.34+i*.22,1.092,0);solar.add(line);}
    solar.position.set(3.0,.5,.55);island.add(solar);

    // Tiny perimeter grasses.
    for(let i=0;i<35;i++){
      const a=Math.random()*Math.PI*2,r=2.7+Math.random()*1.25;
      const blade=new T.Mesh(new T.ConeGeometry(.045,.25,5),i%2?grass2:leaf);
      blade.position.set(Math.cos(a)*r,.62,Math.sin(a)*r);blade.rotation.z=(Math.random()-.5)*.35;island.add(blade);
    }

    // Continuous 360-degree rotation, with a small pointer-controlled tilt.
    const rotationSpeed = 0.22; // radians per second; one full turn about every 28.6 seconds
    let pointerOffsetY = 0;
    let targetX = 0;
    let smoothOffsetY = 0;
    host.addEventListener("pointermove", e => {
      const b = host.getBoundingClientRect();
      pointerOffsetY = (((e.clientX - b.left) / b.width) - .5) * .32;
      targetX = (((e.clientY - b.top) / b.height) - .5) * .09;
    });
    host.addEventListener("pointerleave", () => {
      pointerOffsetY = 0;
      targetX = 0;
    });

    const resize=()=>{
      const w=Math.max(1,host.clientWidth),h=Math.max(1,host.clientHeight);
      camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);
    };
    const observer=new ResizeObserver(resize);observer.observe(host);resize();

    const clock=new T.Clock();
    let raf=0;
    const draw=()=>{
      raf=requestAnimationFrame(draw);
      const t=clock.getElapsedTime();
      smoothOffsetY += (pointerOffsetY - smoothOffsetY) * .035;
      island.rotation.y = -0.28 + (t * rotationSpeed) + smoothOffsetY;
      island.rotation.x += (targetX - island.rotation.x) * .025;
      island.position.y=Math.sin(t*.65)*.055;
      trees.forEach((tr,i)=>tr.rotation.z=Math.sin(t*.6+i)*.008);
      renderer.render(scene,camera);
    };
    draw();
    window.addEventListener("pagehide",()=>{cancelAnimationFrame(raf);observer.disconnect();renderer.dispose();},{once:true});
  };
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",start,{once:true});
  else start();
})();
