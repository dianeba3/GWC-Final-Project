
function chatbot()
{
    while(true)
    {
      var first = prompt("Hi! I am your college wingman, you can ask me questions about essays, college applications, financial aid, how to make a decision about which college to go to, how to cope with stress, or standardized tests. Please type essay, finance, decision, stress, test, or application");
      if(first=="essay")
      {
        var first1= prompt("Well, an essay is supposed to be about who you are, so write about what you know, make sure that admissions officers know who you are. Does that help? Please type yes or no.");
        if(first1=="yes")
        {
          var first2= prompt("Do you have another question? Please type yes or no.");
          if(first2=="yes")
          {
            continue;
          }else
          {
            println("Ok Bye!");
            break;
          }
        }else
        {
          var first3= prompt("Try this: set a timer for 20 minutes and just write whatever comes to mind, and do not hit the back space, just keep writing. Does that help? Please type yes or no.");
          if(first3=="yes")
          {
            var first4= prompt("Do you have another question? Please type yes or no.");
            if(first4=="yes")
            {
              continue;
            }else
            {
              println("Ok Bye!");
              break;
            }
          }else
          {
            var first5=prompt("I am sorry I could not help, would you like to ask another question?");
            if(first5=="yes")
            {
              continue;
            }else
            {
              println("Ok bye!");
              break;
            }
          }

        }
        }
      else if(first=="stress")
      {
        var stress=prompt("You should check out the stress relief tab on the My College Wingman website! There are a lot of great resources on how to deal with stress on the website. Do you want to ask another quesion? Please type yes or no.");
        if(stress=="yes")
        {
          continue;
        }else
        {
          println("Ok bye!");
          break;
        }
      }
      else if(first=="test")
      {
        var test=prompt("Would you like to know more about the SAT, ACT, or subject tests? Please type sat, act, or subject.");
        if(test=="sat")
        {
          var sat=prompt("The SAT test comprises of a reading section, a grammar section, and 2 math sections: one calculator and one non-calculator. To improve your score, I would recommend using Khan academy which is endorsed by the College board(it administers the test). Other than that, just practice to improve your score! Do you have another question? Please type yes or no.");
          if(sat=="yes")
          {
            continue;
          }else
          {
            break;
          }
        }
        if(test=="act")
        {
          var act=prompt("The ACT test comprises of a reading section, a grammar section, a math section, and a science section. To improve your score, I would recommend using the ACT prep book which is endorsed by the ACT(it administers the test). Other than that, just practice to improve your score! Do you have another question? Please type yes or no.");
          if(act=="yes")
          {
            continue;
          }else
          {
            break;
          }
        }
        if(test=="subject")
        {
          var subject=prompt("The subject tests are tests in different, more specific subjects offered by the college board to test your proficiency in the subject. Some colleges require them, some recommend them, and others do not need them at all. Check the school's website for school-specific requirements, and check the college board website for more information. Do you have another question? Please type yes or no.");
          if(subject=="yes")
          {
            continue;
          }else
          {
            break;
          }
        }
      }
      else if(first=="decision")
      {
        var deci=prompt("This is a big decision, so I do not blame you for worrying about making a decision. Just know that this is your decision ultimately, and that you should factor in how far you want to go, or if you want to go to a big school or a small school. Does this help? Please type yes or no.");
        if(deci=="yes")
        {
          var answer=prompt("Do you want to ask another question?");
          if(answer=="yes")
          {
            continue;
          }else{
          {
            break;
          }
          }
        }else {
        {
            var promp=prompt("You should talk to your school counselor, your parents, friends, anyone who can help you decide. Do you want to ask another question?");
            if(promp=="yes")
            {
              continue;
            }else{
            {
              break;
            }
            }
        }
        }
      }
      else if(first=="finance")
      {
        var fin=prompt("Do you have a question about how to pay or financial aid? Please type pay or aid.");
        if(fin=="pay")
        {
          var final=prompt("You could take out a loan from the bank, however, also be aware of student debt, it takes a long time to pay that off. Other ways to pay are to get a job, financial aid, or scholarships. Do you have another question? Please type yes or no.");
          if(final=="yes")
          {
            continue;
          }else
          {
            break;
          }
        }
        if(fin=="aid")
        {
          var final1=prompt("The amount of money that each person pays depends on their own financial situation, thus I cannot help, however, I suggest that you visit the specific college's website and use the aid calculator, they are usually accurate in the results that they give you. Do you have another question? Please type yes or no.");
          if(final1=="yes")
          {
            continue;
          }else
          {
            break;
          }
        }
      }
      else if(first=="application")
      {
        var type=prompt("Do you have a question about the difference between the applications or how to complete them? Please type difference or completion.");
        if(type=="difference")
        {
          var question=prompt("Do you want to know about the Coalition application or the Common application? Please type coalition or common.");
          if(question=="coalition")
          {
            var coal=prompt("The coalition application is used for around 80 colleges, so it depends on which college you are looking at; you should create an account on both coalition and common app and decide which one works for you based off of which colleges are available. You can also use both if necessary. Do you want to ask another question? Please type yes or no.");
            if(coal=="yes")
            {
              continue;
            }else
            {
              break;
            }
          }
          if(question=="common")
          {
            var common=prompt("The common application is used for over 750 colleges, so it depends on which college you are looking at; you should create an account on both coalition and common app and decide which one works for you based off of which colleges are available. You can also use both if necessary. Do you want to ask another question? Please type yes or no.");
            if(common=="yes")
            {
              continue;
            }else
            {
              break;
            }
          }
        }
        if(type=="completion")
        {
          var comp=prompt("A new feature of the applications is that there are videos on the applications themselves that show how to fill out the necessary information, I would suggest utlizing those to complete the application. Would you like further information? Please type yes or no.");
          if(comp=="yes")
          {
            var more=prompt("I would suggest using resouces such as CollegeVine for more involved questions, I do not have information to help you further than the completion of the application. Do you want to ask anothet question? Please type yes or no.");
            if(more=="yes")
            {
              continue;
            }else
            {
              break;
            }
          }
          else
          {
            var fins=prompt("Do you want to ask another question? Please type yes or no.");
            if(fins=="yes")
            {
              continue;
            }else
            {
              break;
            }
          }
        }
      }
    }
}
