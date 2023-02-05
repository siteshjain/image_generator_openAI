function onSubmit(e){
    e.preventDefault();
    document.querySelector('.msg').textContent='';
    document.querySelector('#image').src='';
    const prompt=document.querySelector('#prompt').value;
    const size=document.querySelector('#size').value;

    generateImageRe(prompt,size)
}

async function generateImageRe(prompt,size){
    try{
        const response=await fetch('/openai/generateimage',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                prompt,
                size
            })

        })
        if(!response.ok){
            throw new Error('incorrect');
        }
        const data=await response.json();
        const imageUrl=data.data;
        document.querySelector('#image').src=imageUrl
    }catch (error){
             document.querySelector('.msg').textContent = error;

    }
}

document.querySelector('#image-form').addEventListener('submit',onSubmit);