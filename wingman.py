
#essays, apps, finance, decisions, stress, tests

while True:
    first=input("Hi! I am your college wingman, you can ask me questions about essays, college applications, financial aid, or how to make a decision about which college to go to. ")
    if("essay" in first or "write" in first):
        essay1=input("Well, an essay is supposed to be about who you are, so write about what you know, make sure that admissions officers know who you are. Does that help? ")
        if("yes" in essay1 or "yeah" in essay1 or "sure" in essay1):
            final=input("Do you need help with something else?")
            if("no" in final):
                print("Bye!")
                exit()
            elif("yes" in final or "yeah" in final or "sure" in final):
                continue
        else:
            next=input("Try this: set a timer for 20 minutes and just write whatever comes to mind, and do not hit the back space, just keep writing. Does that help? ")
            if("yes" in next or "yeah" in next or "sure" in next or "kinda" in next or "kind of" in next):
                final1=input("Do you need help with something else? ")
                if("no" in final1):
                    print("Bye!")
                    exit()
                elif("yes" in final1 or "yeah" in final1 or "sure" in final1):
                    continue
            else:
                print("I'm sorry I could not be of much help.")
                exit()
    elif("college application" in first or "application" in first or "app" in first or "coalition" in first or "common" in first or "deadline" in first):
        if("coalition" in first or "common" in first or "use" in first):
            if("help" in first):
                help=input("Do you need help regarding how to complete the application? ")
                if("yes" in help):
                    print("A new feature of the applications is that there are videos on the applications themselves that show how to fill out the necessary information, I would suggest utlizing those to complete the application.")
                    help1=input("Does that help? ")
                    if("yes" in help1 or "yeah" in help1 or "sure" in help1):
                        help2=input("Do you want to ask another question? ")
                        if("yes" in help2 or "yeah" in help2 or "sure" in help2):
                            continue
                        elif("no" in help2 or "not really" in help2):
                            print("Bye!")
                            exit()
                        else:
                            star=input("Sorry I do not understand, do you want to ask another question?")
                            if("yes" in star or "yeah" in star or "sure" in star):
                                continue
                            else:
                                print("Bye!")
                                exit()
                    else:
                        help3=input("I am sorry, would you like to ask another question? ")
                        if("yes" in help3 or "yeah" in help3 or "sure" in help3):
                            continue
                        elif("no" in help3 or "not really" in help3):
                            print("Bye!")
                            exit()
                        else:
                            star1=input("Sorry I do not understand, do you want to ask another question?")
                            if("yes" in star1 or "yeah" in star1 or "sure" in star1):
                                continue
                            else:
                                print("Bye!")
                                exit()
                else:
                    print("I would suggest using resouces such as CollegeVine for more involved questions, I do not have information to help you further than the completion of the application.")
                    extra=input("I am sorry I could not help, would you like to ask another question? ")
                    if("yes" in extra or "yeah" in extra or "sure" in extra ):
                        continue
                    elif("no" in extra or "not really" in extra):
                        print("Bye!")
                        exit()
                    else:
                        star2=input("Sorry I do not understand, do you want to ask another question?")
                        if("yes" in star2 or "yeah" in star2 or "sure" in star2):
                            continue
                        else:
                            print("Bye!")
                            exit()
            print("The common app is used for over 750 colleges and the coalition is used for around 80 colleges, it depends on which college you are looking at; you should create an account on both and decide which one works for you, and you can also use both if necessary. ")
            app=input("Does that help? ")
            if("no" in app or "not really" in app):
                fail=input("I am sorry I could not help, would you like to ask another question? ")
                if("no" in fail or "not really" in fail):
                    print("Bye!")
                    exit()
                else:
                    continue
            else:
                more=input("Glad I could help, do you need help with anything else? ")
                if("yes" in more or "yeah" in more or "sure" in more):
                    continue
                elif("no" in more or "not really" in more):
                    print("Bye!")
                    exit()
                else:
                    star3=input("Sorry I do not understand, do you want to ask another question?")
                    if("yes" in star3 or "yeah" in star3 or "sure" in star3):
                        continue
                    else:
                        print("Bye!")
                        exit()
        if("help" in first):
            help=input("Do you need help regarding how to complete the application? ")
            if("yes" in help):
                print("A new feature of the applications is that there are videos on the applications themselves that show how to fill out the necessary information, I would suggest utlizing those to complete the application.")
                help1=input("Does that help? ")
                if("yes" in help1 or "yeah" in help1 or "sure" in help1):
                    help2=input("Do you want to ask another question? ")
                    if("yes" in help2 or "yeah" in help2  or "sure" in help2):
                        continue
                    elif("no" in help2 or "not really" in help2):
                        print("Bye!")
                        exit()
                    else:
                        star4=input("Sorry I do not understand, do you want to ask another question?")
                        if("yes" in star4 or "yeah" in star4 or "sure" in star4):
                            continue
                        else:
                            print("Bye!")
                            exit()
                else:
                    help3=input("I am sorry, would you like to ask another question? ")
                    if("yes" in help3 or "yeah" in help3 or "sure" in help3):
                        continue
                    elif("no" in help3 or "not really" in help3):
                        print("Bye!")
                        exit()
                    else:
                        star5=input("Sorry I do not understand, do you want to ask another question?")
                        if("yes" in star5 or "yeah" in star5 or "sure" in star5):
                            continue
                        else:
                            print("Bye!")
                            exit()
            else:
                print("I would suggest using resouces such as CollegeVine for more involved questions, I do not have information to help you further than the completion of the application.")
                extra=input("I am sorry I could not help, would you like to ask another question? ")
                if("yes" in extra or "yeah" in extra or "sure" in extra ):
                    continue
                elif("no" in extra or "not really" in extra):
                    print("Bye!")
                    exit()
                else:
                    star6=input("Sorry I do not understand, do you want to ask another question?")
                    if("yes" in star6 or "yeah" in star6 or "sure" in star6):
                        continue
                    else:
                        print("Bye!")
                        exit()
        if("open" in first or "deadline" in first or "due" in first):
            print("The applications open on August 1st, and the deadlines vary for each college, I would suggest that you check the college's website for more information about deadlines.")
            help4=input("Does that help? ")
            if("yes" in help4 or "yeah" in help4  or "sure" in help4):
                help5=input("Do you want to ask another question? ")
                if("yes" in help5 or "yeah" in help5 or "sure" in help5):
                    continue
                elif("no" in help5 or "not really" in help5):
                    print("Bye!")
                    exit()
                else:
                    star7=input("Sorry I do not understand, do you want to ask another question?")
                    if("yes" in star7 or "yeah" in star7 or "sure" in star7):
                        continue
                    else:
                        print("Bye!")
                        exit()
            else:
                help6=input("I am sorry, would you like to ask another question? ")
                if("yes" in help6 or "yeah" in help6 or "sure" in help6):
                    continue
                elif("no" in help6 or "not really" in help6):
                    print("Bye!")
                    exit()
                else:
                    star8=input("Sorry I do not understand, do you want to ask another question?")
                    if("yes" in star8 or "yeah" in star8 or "sure" in star8):
                        continue
                    else:
                        print("Bye!")
                        exit()
        else:
            ask= input("I do not understand, can you ask another question? ")
            if("yes" in ask or "yeah" in ask  or "sure" in ask):
                continue
            else:
                print("Sorry then, bye.")
                exit()
    elif("financial" in first or "money" in first or "expensive" in first or "pay" in first):
        if("how" in first or "pay" in first):
            print("You could take out a loan from the bank, however, also be aware of student debt, it takes a long time to pay that off. Other ways to pay are to get a job, financial aid, or scholarships.")
            money1=input("Do you want to ask another question? ")
            if("yes" in money1 or "yeah" in money1 or "sure" in money1):
                continue
            elif("no" in money1 or "not really" in money1):
                print("Bye!")
                exit()
            else:
                star9=input("Sorry I do not understand, do you want to ask another question?")
                if("yes" in star9 or "yeah" in star9 or "sure" in star9):
                    continue
                else:
                    print("Bye!")
                    exit()
        print("The amount of money that each person pays depends on their own financial situation, thus I cannot help, however, I suggest that you visit the specific college's website and use the aid calculator, they are usually accurate in the results that they give you.")
        money=input("Sorry I could not be of much help, would you like to ask another question?")
        if("yes" in money or "yeah" in money  or "sure" in money):
            continue
        elif("no" in money or "not really" in money):
            print("Bye!")
            exit()
        else:
            star0=input("Sorry I do not understand, do you want to ask another question?")
            if("yes" in star0 or "yeah" in star0 or "sure" in star0):
                continue
            else:
                print("Bye!")
                exit()
    elif("decision" in first or "want to go" in first or "right" in first):
        print("This is a big decision, so I do not blame you for worrying about making a decision. Just know that this is your decision ultimately, and that you should factor in how far you want to go, or if you want to go to a big school or a small school.")
        deci=input("Does this help? ")
        if("yes" in deci or "yeah" in deci):
            help7=input("Do you have another question? ")
            if("yes" in help7 or "yeah" in help7 or "sure" in help7):
                continue
            elif("no" in help7 or "not really" in help7):
                print("Bye!")
                exit()
            else:
                star11=input("Sorry I do not understand, do you want to ask another question?")
                if("yes" in star11 or "yeah" in star11 or "sure" in star11):
                    continue
                else:
                    print("Bye!")
                    exit()
        else:
            coun=input("Have you thought about talking to a school councelor? They are usually very helpful. ")
            if("yes" in coun or "yeah" in coun or "sure" in coun):
                print("That's great!")
                final5=input("Do you have any other questions? ")
                if("yes" in final5 or "yeah" in final5 or "sure" in final5):
                    continue
                elif("no" in final5 or "not really" in final5):
                    print("Bye!")
                    exit()
                else:
                    star22=input("Sorry I do not understand, do you want to ask another question?")
                    if("yes" in star22 or "yeah" in star22 or "sure" in star22):
                        continue
                    else:
                        print("Bye!")
                        exit()
            else:
                print("You should talk to a counselor, it would help.")
                help8=input("Do you have another question? ")
                if("yes" in help8 or "yeah" in help8 or "sure" in help8):
                    continue
                elif("no" in help8 or "not really" in help8):
                    print("Bye!")
                    exit()
                else:
                    star33=input("Sorry I do not understand, do you want to ask another question?")
                    if("yes" in star33 or "yeah" in star33 or "sure" in star33):
                        continue
                    else:
                        print("Bye!")
                        exit()
    elif("stress" in first or "cope" in first or "overwhelm" in first or "deal" in first):
        print("You should check out the stress relief tab on the My College Wingman website! There are a lot of great resources on how to deal with stress on the website.")
        stress=input("Do you want to ask another question? ")
        if("yes" in stress or "yeah" in stress or "sure" in stress):
            continue
        elif("no" in stress or "not really" in stress):
            print("Bye!")
            exit()
        else:
            star44=input("Sorry I do not understand, do you want to ask another question?")
            if("yes" in star44 or "yeah" in star44 or "sure" in star44):
                continue
            else:
                print("Bye!")
                exit()
    elif("test" in first or "sat" in first or "act" in first or "SAT" in first or "ACT" in first or "score" in first):
        if("improve" in first or "help" in first or "increase" in first):
            print("To improve your test score, as cliche as it sounds, I would recommend just practicing, there are some great resources out there such as Princeton Review, Act books, or Khan Academy that can help prepare you for the tests.")
            tests=input("Do you have more questions? ")
            if("yes" in tests or "yeah" in tests or "sure" in tests):
                continue
            elif("no" in tests or "not really" in tests):
                print("Bye!")
                exit()
            else:
                star55=input("Sorry I do not understand, do you want to ask another question?")
                if("yes" in star55 or "yeah" in star55 or "sure" in star55):
                    continue
                else:
                    print("Bye!")
                    exit()
        if("subject" in first):
            print("The subject tests are tests in different, more specific subjects offered by the college board to test your proficiency in the subject. Some colleges require them, some recommend them, and others do not need them at all. Check the school's website for school-specific requirements.")
            subject=input("Do you have another question? ")
            if("yes" in subject or "yeah" in subject or "sure" in subject):
                continue
            elif("no" in subject or "not really" in subject):
                print("Bye!")
                exit()
            else:
                star66=input("Sorry I do not understand, do you want to ask another question?")
                if("yes" in star66 or "yeah" in star66 or "sure" in star66):
                    continue
                else:
                    print("Bye!")
                    exit()
    else:
        print("I am sorry I do not think I will be able to help you with that question.")
        other=input("Do you want to ask another question? ")
        if("yes" in other or "yeah" in other or "sure" in other):
            continue
        elif("no" in other or "not really" in other):
            print("Bye!")
            exit()
        else:
            star77=input("I do not understand, do you want to ask another question?")
            if("yes" in star77 or "yeah" in star77 or "sure" in star77):
                continue
            else:
                print("Bye!")
                exit()
