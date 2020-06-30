//add top two elements in the array
var twoSum = function(nums, target) {
    var result = 0;
    for(let i = 0; i< nums.length;i++){
        result = nums[i]+nums[i+1]
        if(result === target){
            return [nums[i],nums[i+1]]
        }
    }
    return false;
};

twoSum([1,2,3],5)

//find length of longest substring
var lengthOfLongestSubstring = function(s) {
    var result = 0;
    var currentString = "";
    var position;
    var char;

    for(let i = 0; i < s.length; i++){
        char = s.charAt(i);
        position = currentString.indexOf(char);

        if(position !== -1){
            currentString = currentString.substr(position+1)
        }
        currentString += char;
        result = Math.max(result,currentString.length);
    }
    return result;
};

lengthOfLongestSubstring("abcabcbb")

//get only numbers and + - and ""
var myAtoi = function(str) {
    var code;
    var result;
    for(var char of str ){
        if(isAlphaNumeric(char)){
            result += char;
        }
    }
    function isAlphaNumeric(char){
       var code = char.charCodeAt(0);

       if(!(code > 47 && code <58 ) && !(char === " " || char ==="+" || char ==="-")) {
           return false;
       }
     return true;
    }
    return result;
};

myAtoi("te123")


//****** reverse the singly linkedlist logic
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var prev = null;
    var curr = head;
    var nextTemp
    while (curr != null) {
        nextTemp  = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
    
};

//merge two sorted linked lists
var mergeTwoLists = function(l1, l2) {
     if (l1 == null) {
            return l2;
        }
        else if (l2 == null) {
            return l1;
        }
        else if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        }
        else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
};

//{{{{{{{}}}}}}} [[[[[[[[[]]]]]]]]] ((((((((((((((((((()))))))))))))))))))
var isValid = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        
        if (item === '(' || item === '{' || item === '[') {
            stack.push(item);
        } else {
            if (stack.length === 0) {
                //closed without opening
                return false;
            }
            
            const prevItem = stack[stack.length - 1];
            if (item === '}' && prevItem === '{') {
                stack.pop();
            } else if (item === ']' && prevItem === '[') {
                stack.pop();       
            } else if (item === ')' && prevItem === '(') {
                stack.pop();       
            } else {
                //is not closing properly
                return false;
            }
        }
    }
    
    return stack.length === 0;
};


///valid bst
var isValidBST = function(root) {
    if(!root) return true;
    return validate(root, null, null);
};

function validate(node, min, max){
    if(min !== null && node.val <= min) return false;
    if(max !== null && node.val >= max) return false;

    // everything from the left should be less than current node,
    // we do not check min here
    if(node.left && !validate(node.left, min, node.val)) return false;
    // everything from the right should be greater than current node,
    // we do not check max here
    if(node.right && !validate(node.right, node.val, max)) return false;

    return true;
}


//add two numbers reverse linked lists
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var sum;
    var head = new ListNode(0);
    var main = head;
    while (l1 || l2) {
        if(!l1 && l2){
            sum = l2.val + carry;
            l2 = l2.next;
        }
        else if(l1 && !l2){
            sum = l1.val + carry;
            l1 = l1.next;
        }
        else{
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        main.next = new ListNode(sum);
        main = main.next;
    }
    if(carry > 0){
        main.next = new ListNode(carry);
    }
    return head.next;
}

//top five students

var highFive = function(items) {
    let m = {},
        res = [];
    
    for(let [id, score] of items){
        if(!m[id]) m[id] = [];
        if(m[id].length < 5) m[id].push(score);
        else{
            let tmp = score;
            for(let i=0; i<5; i++){
                if(m[id][i] < tmp){
                    [tmp, m[id][i]] = [m[id][i], tmp];
                }
            }
        }
    }
    
    for(let id of Object.keys(m)){
        res.push([id, Math.floor(m[id].reduce((a,b)=>a+b,0)/5)]);
    }
    
    return res;
};


//floodfill 
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] == newColor) {
        return image;
    }
    
    const startingColor = image[sr][sc];
    floodFillHelper(image, sr, sc, newColor, startingColor);   
    return image;
};

const floodFillHelper = function(image, sr, sc, newColor, startingColor) {
    if (sr < 0 || 
        sr >= image.length ||
        sc < 0 ||
        sc >= image[0].length ||
        image[sr][sc] == newColor ||
        image[sr][sc] != startingColor) {
        return;
    }
    
    image[sr][sc] = newColor;
    floodFillHelper(image, sr - 1, sc, newColor, startingColor); // up
    floodFillHelper(image, sr + 1, sc, newColor, startingColor); // down
    floodFillHelper(image, sr, sc + 1, newColor, startingColor); // right
    floodFillHelper(image, sr, sc - 1, newColor, startingColor); // left
}


//island answer with dfs
var islandPerimeter = function(grid) {
    let res = 0;
    function dfs(row, col) {
        if(row < 0 || row > grid.length-1 || col < 0 || col > grid[0].length-1) {
            res++;
            return;
        }
        if(grid[row][col] === 1) {
            grid[row][col] = '#';
            dfs(row-1, col);
            dfs(row+1, col);
            dfs(row, col-1);
            dfs(row, col+1);
        }
        else if(grid[row][col] === 0) {
            res++;
            return;
        }
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                dfs(i, j);
                return res;
            }
        }
    }
};

//island water 1 and 0
var numIslands = function(grid) {
    var count = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count += markIsland(i, j)
            }
        }
    }
    function markIsland(x, y) {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === '0') {
            return 0;
        }
        grid[x][y] = '0';
        markIsland(x - 1, y);
        markIsland(x + 1, y);
        markIsland(x, y - 1);
        markIsland(x, y + 1);
        return 1;
    }

    return count;
};