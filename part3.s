.data
array:  .space 400       
.text
.globl main

main:
    li t0, 0             # i 
    li t1, 0             
    li t2, 100           # 100
    la t3, array         # load address

create_loop:
    addi a0, t0, 1       # a0 = t0 + 1 
    sw a0, 0(t3)         # store a0 
    addi t3, t3, 4       
    addi t0, t0, 1       # increment index
    blt t0, t2, create_loop  #repeat

    li t0, 0             
    la t3, array         

# summing everything
sum_loop:
    lw t4, 0(t3)         # load array[t0]
    add t1, t1, t4       # add t4 to t1
    addi t3, t3, 4       
    addi t0, t0, 1       
    blt t0, t2, sum_loop # repeating

# average
    li t6, 100           # load 100 into t6
    div t5, t1, t6       # calculating average

    mv a0, t5            # 
    li a7, 1        
    
done:
    li a7, 93            # Exit syscall
    ecall                
     
