function DNAtoRNA(dna) {
 let dnaInput = dna;
  const stringInput = "T";
  const newLetter= "U";
  
  if(dnaInput === ""){
    return ""
  }

  for(let i=0; i<dnaInput.length;i++){
  if (dnaInput.includes(stringInput)){
    return dnaInput.replaceAll(stringInput,newLetter); 
  } 
    else {return dnaInput;}
  }
}
