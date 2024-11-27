.globl main
.text
main:
	li t0, 0	# Result
	li t1, 1	# i
	li t2, 100	# The stopping point
loop:
	add t0, t0, t1 # increment result by adding value of i
	addi t1, t1, 1 #increment value of i by 1
	ble t1, t2, loop #if t1 <= t2, continue with loop
done:
	mv a0, t0 #return value must be in register a0 instead of t0 which was used earlier
	li a7, 1 #print value in a0 to stdout 
	ecall

	li a7, 93 #exit program using command code 93
	ecall  #call OS to terminate program
