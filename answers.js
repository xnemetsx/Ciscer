/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST11
add(' Which version of NAT allows many hosts inside a private network to simultaneously use a single inside global address for connecting to the Internet?', 'PAT');
add(' What is the group of public IPv4 addresses used on a NAT-enabled router known as?', ' inside global addresses');
add(' Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.  What problem is causing PC-A to be unable to communicate with the Internet?', ' The NAT interfaces are not correctly assigned.');
add(' What is a disadvantage of NAT?', 'There is no end-to-end addressing.');
add(' Which statement accurately describes dynamic NAT?', ' It provides an automated mapping of inside local to inside global IP addresses.');
add(' When dynamic NAT without overloading is being used, what happens if seven users attempt to access a public server on the Internet when only six addresses are available in the NAT pool?', ' The request to the server for the seventh user fails.');
add(' What is the purpose of port forwarding?', 'Port forwarding allows an external user to reach a service on a private IPv4 address that is located inside a LAN.');
add(' Refer to the exhibit. What has to be done in order to complete the static NAT configuration on R1?', ' Interface S0/0/0 should be configured with the command ip nat outside.');
add(' When NAT is employed in a small office, which address type is typically used for hosts on the local LAN?', ' private IP addresses');
add('Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?', 'defines which addresses can be translated');
add(' A network administrator configures the border router with the command R1(config)# ip nat inside source list 4 pool corp. What is required to be configured in order for this particular command to be functional?', ' a NAT pool named corp that defines the starting and ending public IP addresses');
add('Refer to the exhibit. R1 is configured for NAT as displayed. What is wrong with the configuration?', ' NAT-POOL2 is not bound to ACL 1.');
add(' A network engineer has configured a router with the command ip nat inside source list 4 pool corp overload. Why did the engineer use the overload option?', ' The company has more private IP addresses than available public IP addresses.');
add('Refer to the exhibit. What will be the effect of entering the command that is shown in the exhibit on R2 as part of the dynamic NAT configuration?', 'It will bind NAT-POOL1 with ACL 1.');
add(' Which configuration would be appropriate for a small business that has the public IP address of 209.165.200.225/30 assigned to the external interface on the router that connects to the Internet?', 'access-list 1 permit 10.0.0.0 0.255.255.255', ' ip nat inside source list 1 interface serial 0/0/0 overload');
add(' Which type of NAT maps a single inside local address to a single inside global address?', 'static');
add(' Typically, which network device would be used to perform NAT for a corporate environment?', 'router');
add(' Several key servers in an organization must be directly accessible from the Internet. What addressing policy should be implemented for these servers?', ' Assign static internal addresses and public external addresses to each of the servers.');
add(' What is a characteristic of unique local addresses?', ' They allow sites to be combined without creating any address conflicts.');
add('Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?', ' PAT using an external interface');
add('Refer to the exhibit. The NAT configuration applied to the router is as follows:  ERtr(config)# access-list 1 permit 10.0.0.0 0.255.255.255  ERtr(config)# ip nat pool corp 209.165.201.6 209.165.201.30 netmask 255.255.255.224  ERtr(config)# ip nat inside source list 1 pool corp overload  ERtr(config)# ip nat inside source static 10.10.10.55 209.165.201.4  ERtr(config)# interface gigabitethernet 0/0  ERtr(config-if)# ip nat inside  ERtr(config-if)# interface serial 0/0/0  ERtr(config-if)# ip nat outside Based on the configuration and the output shown, what can be determined about the NAT status within the organization?', ' Not enough information is given to determine if both static and dynamic NAT are working.');
add(' What are two required steps to configure PAT? (Choose two.)', ' Define a pool of global addresses to be used for overload translation.', ' Identify the inside interface.');
add('24. Using NAT terminology, what is the address of the source host on a private network as seen from inside the network?', 'inside local');
add('25. What is an advantage of deploying IPv4 NAT technology for internal hosts in an organization?', 'provides flexibility in designing the IPv4 addressing scheme');
add('26. A network administrator is configuring a static NAT on the border router for a web server located in the DMZ network. The web server is configured to listen on TCP port 8080. The web server is paired with the internal IP address of 192.168.5.25 and the external IP address of 209.165.200.230. For easy access by hosts on the internet, external users do not need to specify the port when visiting the web server. Which command will configure the static NAT?', 'R1(config)# ip nat inside source static tcp 192.168.5.25 8080 209.165.200.230 80');
add('27. Fill in the blank. Do not use abbrevations. NAT overload is also know as Port Address Translation', 'Port Address Translation');
add('28. What is the primary purpose of NAT?', ' conserve IPv4 addresses');

/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */
