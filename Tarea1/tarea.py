# 
# Sistemas Inteligentes
# Aplicación de un perceptrón
# @author:
#       Valeria Guerra
#       Emilio Rivas
#       Nahim Medellín Torres
#       Martin Noboa
#       Emmanuel Bautista
# @date: 
#       Enero 10, 2023
# @last_modified:
#       Enero 11, 2023
#
# Característica
# ¿Es cítrico? 4
# ¿Es redondo? 4
# ¿Es verde? 5
# ¿Tiene cáscara gruesa? 2
# ¿Es dulce? -4
# Si es limón  15
REPEAT = False
BIAS = 13
SUM = 0
questions = [
    ["¿Es cítrico?",4],
    ["¿Es redondo?",4],
    ["¿Es verde?",5],
    ["¿Tiene cáscar la gruesa?",2],
    ["¿Es dulce?",-4]
]


def nothing():
    return 0

def askQuestions(index):
    """ 
    show question and receive binary answer to add to global sum
    @param int index: for question list
    @return  
    """
    global SUM
    print(questions[index][0])
    answer = input("Answer: ")
    SUM += questions[index][1] if answer == 'y' else nothing()
    
def isLemon():
    """ 
    add bias value and print if the fruit is a lemon or not based onn SUM value
    @param 
    @return  
    """
    global SUM, BIAS
    print(SUM)
    SUM += BIAS
    print(SUM)
    if SUM >= 15:
        print("It's a lemon") 
    else:
        print("It's not a lemon")

def main():   
    """ 
    call necessary functions for the program
    @param
    @return  
    """ 
    print("Welcome")
    print("Answer with 'y' for yes and 'n' for no.")
    for i in range(len(questions)):
        # print(i)
        askQuestions(i)
    isLemon()
       
repeat = True        
while(repeat):
    SUM = 0
    main()
    answer = input("Repeat? ")
    repeat = True if answer == 'y' else False



