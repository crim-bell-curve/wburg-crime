from math import ceil

asian = [0, 2, 0, 0, 3, 1]
black = [77, 9, 1, 0, 4, 99]
white = [21, 39, 1, 2, 12, 113]

p_asian = .0557
p_black = .1454
p_white = .7529

w_asian = [ i / p_asian for i in asian ]
w_black = [ i / p_black for i in black ]
w_white = [ i / p_white for i in white ]

totals = [ i+j+k for i,j,k in zip(w_asian,w_black,w_white) ]

f_asian = [ i / j * 100 for i,j in zip(w_asian, totals) ]
f_black = [ i / j * 100 for i,j in zip(w_black, totals) ]
f_white = [ i / j * 100 for i,j in zip(w_white, totals) ]

print f_asian, f_black, f_white