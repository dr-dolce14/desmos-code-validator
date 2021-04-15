function match(str,ptn) {
	var last_char_max_idx=-1, cur_char_max_idx=-1, cur_char_min_idx = -1;
	var is_a_match=true;
	last_char_max_idx = findLastOccuranceIndexInString(str,ptn[0]);
	for(let i=1;i<ptn.length;i++) {
		cur_char_max_idx=findLastOccuranceIndexInString(str,ptn[i]);
		cur_char_min_idx=findFirstOccuranceIndexInString(str,ptn[i]);
		if(last_char_max_idx < cur_char_max_idx && last_char_max_idx < cur_char_min_idx) {
			is_a_match = true;
		}
		else {
			is_a_match = false;
		}
		last_char_max_idx = cur_char_max_idx;
		if(is_a_match == false)
			break;
	}
	return is_a_match;
}

function findLastOccuranceIndexInString(str,chr) {
	var curIdx=99999999,maxIdx=-1;
	for(let j=0;j<str.length;j++) {
		if(chr == str[j]) {
			curIdx = j;
			if(curIdx > maxIdx) 
				maxIdx = curIdx;
		}
	}
	return maxIdx;
}

function findFirstOccuranceIndexInString(str,chr) {
	var curIdx=99999999,minIdx=999999999;
	for(let k=0;k<str.length;k++) {
		if(chr == str[k]) {
			curIdx = k;
			if(curIdx < minIdx) 
				minIdx = curIdx;
		}
	}
	return minIdx;
}

function validateCode(code, distractingWords, existingCodes) {
 var regex = /[^a-zA-Z]/g;
 var word = code.replace(regex, "");
 
 if (existingCodes.includes(code)){
   return false
 } else {
 for (let i = 0; i < distractingWords.length; i++){
    if(distractingWords[i]=== word.toLowerCase() || match(code.toLowerCase(), distractingWords[i])){
      
      return false
    }
   }
  return true
  }
 }