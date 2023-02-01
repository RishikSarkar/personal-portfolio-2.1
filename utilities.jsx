const labelMap = {
    1:{name:'A', color:'violet'},
    2:{name:'B', color:'indigo'},
    3:{name:'C', color:'blue'},
    4:{name:'D', color:'green'},
    5:{name:'E', color:'yellow'},
    6:{name:'F', color:'orange'},
    7:{name:'G', color:'red'}
}

export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            const [y,x,height,width] = boxes[i]
            const text = classes[i]

            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'

            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/4, height*imgHeight/4);
            ctx.stroke()
        }
    }
}
