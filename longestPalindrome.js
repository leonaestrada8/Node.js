function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }
  
  function longestPalindrome(s) {
    if (s.length < 2) return s;
    
    let longest = '';
    for (let i = 0; i < s.length; i++) {
      let oddPalindrome = expandAroundCenter(s, i, i); // Odd length
      let evenPalindrome = expandAroundCenter(s, i, i + 1); // Even length
      
      if (oddPalindrome.length > longest.length) {
        longest = oddPalindrome;
      }
      
      if (evenPalindrome.length > longest.length) {
        longest = evenPalindrome;
      }
    }
    
    return longest;
  }
  
  let s1 = "babad";
  let s2 = "cbbd";
  
  console.log(longestPalindrome(s1)); // Output: "bab" or "aba"
  console.log(longestPalindrome(s2)); // Output: "bb"