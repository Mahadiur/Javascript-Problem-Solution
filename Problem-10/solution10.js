// question array
let data_list = [13, 24, 'Karim', {'name': 'guru'}, 45, 17];
let num_array=[];

// Define Function
function seperartearray(data){  
   for (let i=0;i < data.length;i++){
    if (typeof(data[i])== 'number'){
        num_array.push(data[i]);
   }}
}

seperartearray(data_list);
console.log(num_array)