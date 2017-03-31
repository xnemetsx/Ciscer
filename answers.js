/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */

//TEST1
add('1. A network administrator enters the command copy running-config startup-config. Which type of memory will the startup configuration be placed into?', 'NVRAM');
add('2. Which packet-forwarding method does a router use to make switching decisions when it is using a forwarding information base and an adjacency table?', 'Cisco Express Forwarding');
add('3. When a router receives a packet, it examines the destination address of the packet and looks in the Routing table to determine the best path to use to forward the packet.', 'Routing');
add('4. What are two functions of a router? Choose two.', 'A router connects multiple IP networks.', 'It determines the best path to send packets.');
add('5. In order for packets to be sent to a remote destination, what three pieces of information must be configured on a host? Choose three.', 'IP address', 'subnet mask', 'default gateway');
add('6. Which software is used for a network administrator to make the initial router configuration securely?', 'terminal emulation client software');
add('7. Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?', 'no shutdown');
add('8. What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​', 'It is a logical interface internal to the router.');
add('9. What two pieces of information are displayed in the output of the show ip interface brief command? Choose two.', 'IP addresses', 'Layer 1 statuses');
add('10. Which two items are used by a host device when performing an ANDing operation to determine if a destination address is on the same local network? Choose two.', 'destination IP address', 'subnet mask');
add('11. Refer to the exhibit. PC A sends a request to Server B. What IPv4 address is used in the destination field in the packet as the packet leaves PC A?', '192.168.12.16');
add('12. Refer to the exhibit. What does R1 use as the MAC address of the destination when constructing the frame that will go from R1 to Server B?', 'If the destination MAC address that corresponds to the IPv4 address is not in the ARP cache, R1 sends an ARP request.');
add('13. Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?', 'remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0');
add('14. Refer to the exhibit. What will the router do with a packet that has a destination IP address of 192.168.12.227?', 'Send the packet out the Serial0/0/0 interface.');
add('15. Which two statements correctly describe the concepts of administrative distance and metric? Choose two.', 'Administrative distance refers to the trustworthiness of a particular route.', 'Routes with the smallest metric to a destination indicate the best path.');
add('16. Which two parameters are used by EIGRP as metrics to select the best path to reach a network? Choose two.', 'bandwidth', 'delay');
add('17. What route would have the lowest administrative distance?', 'a directly connected network');
add('18. Which two statements correctly describe the concepts of administrative distance and metric? Choose two.', 'Administrative distance refers to the trustworthiness of a particular route.', 'Routes with the smallest metric to a destination indicate the best path.');
add('19. Consider the following routing table entry for R1: D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0 What is the significance of the Serial0/0/0?', 'It is the interface on R1 used to send data that is destined for 10.1.1.0/24.');
add('20. Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. What two conclusions can be drawn from the routing table? Choose two.', 'R1 does not know a route to any remote networks.', 'The interface Fa0/1 is configured with IPv6 address 2001:DB8:ACAD:A::12.');
add('21. A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?', 'The interface fa0/0 has not been activated.');
add('22. A network administrator configures a router by the command ip route 0.0.0.0 0.0.0.0 209.165.200.226. What is the purpose of this command?', 'to provide a route to forward packets for which there is no route in the routing table');
add('23. What are two common types of static routes in routing tables? Choose two', 'a default static route', 'a static route to a specific network');
add('24. What is the effect of configuring the ipv6 unicast-routing command on a router?', 'to enable the router as an IPv6 router');

//TEST2
add('1. What are two advantages of static routing over dynamic routing? Choose two.', 'Static routing is more secure because it does not advertise over the network.', 'Static routing uses fewer router resources than dynamic routing.');
add('2. Refer to the exhibit. What routing solution will allow both PC A and PC B to access the Internet with the minimum amount of router CPU and network bandwidth utilization?', 'Configure a static default route from R1 to Edge, a default route from Edge to the Internet, and a static route from Edge to R1.');
add('3. What is the correct syntax of a floating static route?', 'ip route 209.165.200.228 255.255.255.248 10.0.0.1 120');
add('4. What is a characteristic of a static route that matches all packets?', 'It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route.');
add('5. What type of route allows a router to forward packets even though its routing table contains no specific route to the destination network?', 'default route');
add('6. Why would a floating static route be configured with an administrative distance that is higher than the administrative distance of a dynamic routing protocol that is running on the same router?', 'to be used as a backup route');
add('7. A company has several networks with the following IP address requirements: IP phones – 50 PCs – 70 IP cameras – 10 wireless access points – 10 network printers – 10 network scanners – 2 Which block of addresses would be the minimum to accommodate all of these devices if each type of device was on its own network?', '172.16.0.0/24');
add('8. What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?', 'The static route is removed from the routing table.');
add('9. The network administrator configures the router with the ip route 172.16.1.0 255.255.255.0 172.16.2.2 command. How will this route appear in the routing table?', 'S 172.16.1.0 [1/0] via 172.16.2.2');
add('10. Refer to the exhibit. What two commands will change the next-hop address for the 10.0.0.0/8 network from 172.16.40.2 to 192.168.1.2? Choose two.', 'A config # no ip route 10.0.0.0 255.0.0.0 172.16.40.2', 'A config # ip route 10.0.0.0 255.0.0.0 192.168.1.2');
add('11. Which type of static route that is configured on a router uses only the exit interface?', 'directly connected static route');
add('12. Refer to the graphic. Which command would be used on router A to configure a static route to direct traffic from LAN A that is destined for LAN C?', 'A config # ip route 192.168.4.0 255.255.255.0 192.168.3.2');
add('13. Refer to the exhibit. The network administrator needs to configure a default route on the Border router. Which command would the administrator use to configure a default route that will require the least amount of router processing when forwarding packets?', 'Border config # ip route 0.0.0.0 0.0.0.0 s0/0/1');
add('14. What two pieces of information are needed in a fully specified static route to eliminate recursive lookups? Choose two.', 'the interface ID exit interface', 'the IP address of the next-hop neighbor');
add('15. Refer to the exhibit. What command would be used to configure a static route on R1 so that traffic from both LANs can reach the 2001:db8:1:4::/64 remote network?', 'ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::2');
add('16. Refer to the exhibit. Which default static route command would allow R1 to potentially reach all unknown networks on the Internet?', 'R1 config # ipv6 route ::/0 G0/1 fe80::2*');
add('17. Consider the following command: ip route 192.168.10.0 255.255.255.0 10.10.10.2 5 Which route would have to go down in order for this static route to appear in the routing table?', 'a static route to the 192.168.10.0/24 network');
add('18. Refer to the exhibit. The routing table for R2 is as follows: Gateway of last resort is not set 10.0.0.0/30 is subnetted, 2 subnets C 10.0.0.0 is directly connected, Serial0/0/0 C 10.0.0.4 is directly connected, Serial0/0/1 192.168.10.0/26 is subnetted, 3 subnets S 192.168.10.0 is directly connected, Serial0/0/0 C 192.168.10.64 is directly connected, FastEthernet0/0 S 192.168.10.128 [1/0] via 10.0.0.6 What will router R2 do with a packet destined for 192.168.10.129?', 'send the packet out interface Serial0/0/1');
add('19. A network administrator has entered a static route to an Ethernet LAN that is connected to an adjacent router. However, the route is not shown in the routing table. Which command would the administrator use to verify that the exit interface is up?', ' show ip interface brief');
add('20. Consider the following command: ip route 192.168.10.0 255.255.255.0 10.10.10.2 5 How would an administrator test this configuration?', 'Manually shut down the router interface used as a primary route.');
add('21. Refer to the exhibit. The small company shown uses static routing. Users on the R2 LAN have reported a problem with connectivity. What is the issue?', 'R1 needs a static route to the R2 LAN.');
add('22. Which three IOS troubleshooting commands can help to isolate problems with a static route? Choose three.', 'ping', 'show ip route', 'show ip interface brief');
add('23. An administrator issues the ipv6 route 2001:db8:acad:1::/32 gigabitethernet0/0 2001:db8:acad:6::1 100 command on a router. What administrative distance is assigned to this route?', '100');
add('24. Refer to the exhibit. The network engineer for the company that is shown wants to use the primary ISP connection for all external connectivity. The backup ISP connection is used only if the primary ISP connection fails. Which set of commands would accomplish this goal?', 'ip route 0.0.0.0 0.0.0.0 s0/0/0 ip route 0.0.0.0 0.0.0.0 s0/1/0 10');
add('25. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Why are the pings from PC0 to Server0 not successful?', 'The static route to network 192.168.2.0 is misconfigured on Router1.​');
add('26. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. What IPv6 static route can be configured on router R1 to make a fully converged network?', 'ipv6 route 2001:db8:10:12::/64 S0/0/1')

add('1. What is a basic function of the Cisco Borderless Architecture access layer?', 'provides access to the user');
add('2.What is a basic function of the Cisco Borderless Architecture distribution layer?', 'aggregating Layer 3 routing boundaries');
add('3. A network designer must provide a rationale to a customer for a design which will move an enterprise from a flat network topology to a hierarchical network topology. Which two features of the hierarchical design make it the better choice? Choose two.', 'easier to provide redundant links to ensure higher availability', 'simpler deployment for additional switch equipment');
add('4. What is a collapsed core in a network design?', 'a combination of the functionality of the distribution and core layers');
add('5. What are two advantages of modular switches over fixed-configuration switches? Choose two.', 'increased scalability', 'need for fewer power outlets');
add('6. Which switch form factor should be used when large port density, fault tolerance, and low price are important factors?', 'stackable switch');
add('7. An administrator purchases new Cisco switches that have a feature called StackPower. What is the purpose of this feature?', 'It enables the sharing of power among multiple stackable switches.');
add('8. What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?', 'has a lower latency appropriate for high-performance computing applications');
add('9. Which type of transmission does a switch use when the destination MAC address is not contained in the MAC address table?', 'broadcast');
add('10. Refer to the exhibit. Consider that the main power has just been restored. PC1 asks the DHCP server for IPv4 addressing. The DHCP server sends it an IPv4 address. While PC2 is still booting up, PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward this request?', 'to Fa0/1, Fa0/2, and Fa0/3 only');
add('11. What information is added to the switch table from incoming frames?', 'source MAC address and incoming port number');
add('12. What is one function of a Layer 2 switch?', 'determines which interface is used to forward a frame based on the destination MAC address');
add('13. Refer to the exhibit. How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?', 'SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch.');
add('14. What does the term “port density” represent for an Ethernet switch?', 'the number of available ports');
add('15. ABC, Inc. has about fifty hosts in one LAN. The administrator would like to increase the throughput of that LAN. Which device will increase the number of collision domains and thereby increase the throughput of the LAN?', 'switch');
add('16. What are two reasons a network administrator would segment a network with a Layer 2 switch?', 'to enhance user bandwidth', 'to isolate traffic between segments');
add('A converged network is one that uses the same infrastructure to carry voice, data, and video signals.', 'converged');
add('18. Refer to the exhibit. Fill in the blank. There are 12 collision domains in the topology.', '12');
add('19. Refer to the exhibit. Fill in the blank. There are five  broadcast domains in the topology.', 'five');

//FINAL TEST
add('1. Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?', 'extranet');
add('2. A small business user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?', 'DSL');
add('3. Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?', 'The administrator must first enter privileged EXEC mode before issuing the command.');
add('4. Which keys act as a hot key combination that is used to interrupt an IOS process?', 'Ctrl-Shift-6');
add('5. Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?', 'linevtyin');
add('6. A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?', 'This command prevents someone from viewing the running configuration passwords.');
add('7. What is the purpose of the SVI on a Cisco switch?', 'The SVI provides a virtual interface for remote access to the switch.');
add('8. Which message delivery option is used when all devices need to receive the same message simultaneously?', 'broadcast');
add('9. Which two protocols function at the internet layer? Choose two.', 'ICMP', 'IP');
add('10. What PDU is associated with the transport layer?', 'segment');
add('11. What is done to an IP packet before it is transmitted over the physical medium?', 'It is encapsulated in a Layer 2 frame.');
add('12. What type of communication medium is used with a wireless LAN connection?', 'radio waves');
add('13. In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? Choose two.', 'crosstalk', 'electromagnetic interference');
add('14. What are the two sublayers of the OSI model data link layer? Choose two.', 'LLC', 'MAC');
add('15. A technician has been asked to develop a physical topology for a network that provides a high level of redundancy. Which physical topology requires that every node is attached to every other node on the network?', 'mesh');
add('16. What type of communication rule would best describe CSMA/CD?', 'access method');
add('17. If data is being sent over a wireless network, then connects to an Ethernet network, and eventually connects to a DSL connection, which header will be replaced each time the data travels through a network infrastructure device?', 'data link');
add('18. What best describes the destination IPv4 address that is used by multicasting?', 'a single IP multicast address that is used by all destinations in a group');
add('19. In an Ethernet network, when a device receives a frame of 1200 bytes, what will it do?', 'process the frame as it is');
add('20. What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?', 'destination MAC address');
add('21. What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?', 'It forwards the frame out of all ports except for the port at which the frame was received.');
add('22. What are two features of ARP? Choose two.', 'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.', 'If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('23. Which two services are required to enable a computer to receive dynamic IP addresses and access the Internet using domain names? Choose two.', 'DNS', 'DHCP');
add('24. What is a basic characteristic of the IP protocol?', 'connectionless');
add('25. Refer to the exhibit. A user issues the command netstat –r on a workstation. Which IPv6 address is one of the link-local addresses of the workstation?', 'fe80::30d0:115:3f57:fe4c/128');
add('26. Which two statements correctly describe a router memory type and its contents? Choose two.', 'RAM is volatile and stores the IP routing table.', 'ROM is nonvolatile and contains basic diagnostic software.');
add('27. What three blocks of addresses are defined by RFC 1918 for private network use? Choose three.', '10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16');
add('28. What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?', '2001:DB8:0:AB00::1234');
add('29. At a minimum, which address is required on IPv6-enabled interfaces?', 'link-local');
add('30. An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?', 'all IPv6 configured routers on the local link');
add('31. What is the purpose of ICMP messages?', 'to provide feedback of IP packet transmissions');
add('32. Which statement describes a characteristic of the traceroute utility?', 'It identifies the routers in the path from a source host to a destination host.');
add('33. What is the usable number of host IP addresses on a network that has a /26 mask?', '62');
add('34. Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?', '172.16.19.255');
add('35. A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?', '10.1.1.128/28, 10.1.1.144/28, 10.1.1.160/29');
add('36. Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?', '2001:db8:0:f000::/52');
add('37. A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?', 'The data flow is being tracked based on the source port number utilized by each application.');
add('38. What three services are provided by the transport layer? Choose three.', 'flow control', 'connection establishment', 'error recovery');
add('39. An Internet television transmission is using UDP. What happens when part of the transmission is not delivered to the destination?', 'The transmission continues without the missing portion.');
add('40. Which two OSI model layers are considered to be included in the top layer of the TCP/IP protocol stack? Choose two.', 'presentation', 'session');
add('41. An author is uploading one chapter document from a personal computer to a file server of a book publisher. What role is the personal computer assuming in this network model?', 'client');
add('42. Which two automatic addressing assignments are supported by DHCP? Choose two.', 'subnet mask', 'default gateway address');
add('43. When a network administrator is trying to manage network traffic on a growing network, when should traffic flow patterns be analyzed?', 'during times of peak utilization');
add('44. What is the objective of a network reconnaissance attack?', 'discovery and mapping of systems');
add('45. What will be the result of failed login attempts if the following command is entered into a router? login block-for 150 attempts 4 within 90', 'All login attempts will be blocked for 150 seconds if there are 4 failed attempts within 90 seconds.');
add('46. A user reports a lack of network connectivity. The technician takes control of the user machine and attempts to ping other computers on the network and these pings fail. The technician pings the default gateway and that also fails. What can be determined for sure by the results of these tests?', 'Nothing can be determined for sure at this point.');
add('47. For Cisco IOS, which escape sequence allows terminating a traceroute operation?', 'Ctrl+Shift+6');
add('48. What is an advantage of storing configuration files to a USB flash drive instead of to a TFTP server?', 'The transfer of the files does not rely on network connectivity.');

/*FINAL TEST*/
add('Which communication tool allows real-time collaboration?',
   'instant messaging');
add('A host is accessing a Web server on a remote network. Which three functions are performed by intermediary network devices during this conversation? Choose three.',
   'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
   'DSL');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?',
   'WAN');
add('Refer to the exhibit. From which location did this router load the IOS? ',
   'flash memory');
add('Which connection provides a secure CLI session with encryption to a Cisco network device?',
   'an SSH connection');
add('Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?',
   'The administrator must first enter privileged EXEC mode before issuing the command.');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?',
   'to interrupt the ping process');
add('What function does pressing the Tab key have when entering a command in IOS?',
   'It completes the remainder of a partially typed word in a command.');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
   'Switch config #?');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?',
   'linevtyin');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
   'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. Which action will be successful?',
   'PC2 can send a ping to 192.168.1.1.');
add('Which IPv4 address can be pinged to test the internal TCP/IP operation of a host?',
   '127.0.0.1');
add('What three application layer protocols are part of the TCP/IP protocol suite? Choose three.',
   'DHCP','DNS','FTP');
add('Which two protocols function at the internet layer? Choose two.',
   'ICMP','IP');
add('Which publicly available resources describe protocols, processes, and technologies for the Internet but do not give implementation details?',
   'Request for Comments');
add('Which address on a PC does not change, even if the PC is moved to a different network?',
   'MAC address');
add('What is the protocol that is used to discover a physical address from a known logical address and what message type does it use?',
   'ARP, broadcast');
add('What will happen if the default gateway address is incorrectly configured on a host?',
   'The host cannot communicate with hosts in other networks.');
add('What is an important function of the physical layer of the OSI model?',
   'It encodes frames into electrical, optical, or radio wave signals.');
add('Which procedure is used to reduce the effect of crosstalk in copper cables?',
   'twisting opposing circuit wire pairs together');
add('Which two statements describe the characteristics of fiber-optic cabling? Choose two.)',
   'Fiber-optic cabling does not conduct electricity.','Fiber-optic cabling is primarily used as backbone cabling.');
add('What is contained in the trailer of a data-link frame?',
   'error detection');
add('What is the auto-MDIX feature on a switch?',
   'crossover Ethernet cable connection');
add('Refer to the exhibit. A ping to PC3 is issued from PC0, PC1, and PC2 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
   'just PC0 and PC1 MAC addresses');
add('How does a Layer 3 switch differ from a Layer 2 switch?',
   'An IP address can be assigned to a physical port of a Layer 3 switch. However, this is not supported in Layer 2 switches.');
add('What is the purpose of the routing process?',
   'to select the paths that are used to direct traffic to destination networks');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
   'NAT');
add('Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?',
   'It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.');
add('Which of the following are primary functions of a router? Choose two.',
   'packet switching','path selection');
add('Which two statements correctly describe a router memory type and its contents? Choose two.',
   'RAM is volatile and stores the running configuration.','ROM is nonvolatile and stores bootup information.');
add('In which default order will a router search for startup configuration information?',
   'NVRAM, TFTP, setup mode');
add('What happens when part of an Internet VoIP transmission is not delivered to the destination?',
   'The transmission continues without the missing portion.');
add('Which three IP addresses are private ? Choose three.',
   '10.172.168.1','172.20.4.4','192.168.5.254');
add('How many bits make up the single IPv6 hextet :10CD:?',
   '16');
add('What is the effect of configuring the ipv6 unicast-routing command on a router?',
   'to enable the router as an IPv6 router');
add('Which group of IPv6 addresses cannot be allocated as a host source address?',
   'FF00::/8');
add('What is the purpose of ICMP messages?',
   'to provide feedback of IP packet transmissions');
add('Refer to the exhibit. A technician has configured a user workstation with the IP address and default subnet masks that are shown. Although the user can access all local LAN resources, the user cannot access any Internet sites by using either FQDN or IP addresses. Based upon the exhibit, what could account for this failure?',
   'The default gateway address in incorrect.');
add('Which subnet would include the address 192.168.1.96 as a usable host address?',
   '192.168.1.64/26');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
   'predictable static IP addresses for easier identification');
add('Refer to the exhibit. Which IP addressing scheme should be changed?',
   'Site 2');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? Choose two.',
   '/64','/68');
add(' A host PC has just booted and is attempting to lease an address through DHCP. Which two messages will the client typically broadcast on the network? Choose two.',
   'DHCPDISCOVER','DHCPREQUEST');
add('What is the purpose of the network security accounting function?',
   'to keep track of the actions of a user');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?',
   'login block-for 60 attempts 5 within 60');
add('A particular website does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
   'ipconfig /displaydns');
add('Refer to the exhibit. The network administrator enters these commands into the R1 router:R1# copy running-config tftp Address or name of remote host [ ]? When the router prompts for an address or remote host name, what IP address should the administrator enter at the prompt?',
   '192.168.11.252');
add('What two preconfigured settings that affect security are found on most new wireless routers? Choose two.',
   'broadcast SSID','default administrator password');
add(' Which type of wireless security generates dynamic encryption keys each time a client associates with an AP?',
   'WPA');
add('Fill in the blank. is a best-effort, connectionless application layer protocol that is used to transfer files.',
   'TFTP');
add('Which two components are necessary for a wireless client to be installed on a WLAN? Choose two.',
   'wireless NIC','wireless client software');
add('Consider the following range of addresses: 2001:0DB8:BC15:00A0:0000:: 2001:0DB8:BC15:00A1:0000::2001:0DB8:BC15:00A2:0000::2001:0DB8:BC15:00AF:0000::The prefix-length for the range of addresses is.',
   '/60');
add('A host is accessing an FTP server on a remote network. Which three functions are performed by intermediary network devices during this conversation? Choose three.',
   'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('When is a dial-up connection used to connect to an ISP?',
   'when a regular telephone line is used');
add('On a school network, students are surfing the web, searching the library database, and attending an audio conference with their sister school in Japan. If network traffic is prioritized with QoS, how will the traffic be classified from highest priority to lowest priority?',
   'audio conference, database, HTTP');
add('During normal operation, from which location do most Cisco routers run the IOS?',
   'RAM');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?',
   'an SSH connection');
add('Which keys act as a hot key combination that is used to interrupt an IOS process?',
   'Ctrl-Shift-6');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued??',
   'Switch config#?');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?',
   'The new configuration will be loaded if the switch is restarted.');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?',
   'VLAN 1');
add('A technician uses the ping 127.0.0.1 command. What is the technician testing?',
   'the TCP/IP stack on a network host');
add('Which device should be used for enabling a host to communicate with another host on a different network?',
   'router');
add('A network technician is measuring the transfer of bits across the company backbone for a mission critical application. The technician notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? Choose three.',
   'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('Which characteristics describe fiber optic cable? Choose two.',
   'It is not affected by EMI or RFI.','It is the most expensive type of LAN cabling');
add('What are two features of a physical, star network topology? Choose two.',
   'It is straightforward to troubleshoot.','It is easy to add and remove end devices.');
add('A frame is transmitted from one networking device to another. Why does the receiving device check the FCS field in the frame?',
   'to check the frame for possible transmission errors');
add('What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?',
   'It forwards the frame out of all ports except for the port at which the frame was received.');
add('Which switching method has the lowest level of latency?',
   'fast-forward');
add('Which parameter does the router use to choose the path to the destination when there are multiple routes available?',
   'the lower metric value that is associated with the destination network');
add('Which two statements describe the functions or characteristics of ROM in a router? Choose two.',
   'maintains instructions for POST diagnostics','stores bootstrap program');
add('Which statement describes a characteristic of the Cisco router management ports?',
   'A console port is not used for packet forwarding.');
add('What happens when part of an Internet radio transmission is not delivered to the destination?',
   'The transmission continues without the missing portion.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?',
   '203.0.113.211');
add(' Which three IP addresses are private ? Choose three.',
   '10.20.30.1','172.30.5.3','192.168.5.5');
add('What types of addresses make up the majority of addresses within the /8 block IPv4 bit space?',
   'public addresses');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com??',
   '13');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? Choose two.',
   '192.168.1.64/27','192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
   '/25');
add('Which protocol supports rapid delivery of streaming media?',
   'Real-Time Transport Protocol');
add('Why would a network administrator use the tracert utility?',
   'to identify where a packet was lost or delayed on a network');
add('Refer to the exhibit. What is the significance of the asterisk * in the exhibited output?',
   'The asterisk designates which file system is the default file system.');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
   'WPA');
add('Fill in the blank. Point-to-point communications where both devices can transmit and receive on the medium at the same time are known as .',
   'full-duplex');
add('A host is accessing a Telnet server on a remote network. Which three functions are performed by intermediary network devices during this conversation? Choose three.',
   'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('Refer to the exhibit. Which area would most likely be an extranet for the company network that is shown?',
   'area C');
add('What is the purpose of having a converged network?',
   'to reduce the cost of deploying and maintaining the communication infrastructure');
add('hree office workers are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other office workers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
   'audio conference, financial transactions, web page');
add('During normal operation, from which location do most Cisco switches and routers run the IOS?',
   'RAM');
add('A network administrator is making changes to the configuration of a router. After making the changes and verifying the results, the administrator issues the copy running-config startup-config command. What will happen after this command executes?',
   'The configuration will load when the router is restarted.');
add('What information does the loopback test provide?',
   'The TCP/IP stack on the device is working correctly.');
add('What is a characteristic of the LLC sublayer?',
   'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('What method is used to manage contention-based access on a wireless network?',
   'CSMA/CA');
add('What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?',
   'The switch drops the frame.');
add('Which destination address is used in an ARP request frame?',
   'FFFF.FFFF.FFFF');
add('What is the auto-MDIX feature on a switch?',
   'the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?',
   'store-and-forward switching');
add('What are the two main components of Cisco Express Forwarding CEF? Choose two.',
   'adjacency tables','forwarding information base FIB');
add('Which statement describes the sequence of processes executed by a router when it receives a packet from a host to be delivered to a host on another network?',
   'It de-encapsulates the packet, selects the appropriate path, and encapsulates the packet to forward it toward','the destination host.');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
   'NAT');
add('Refer to the exhibit. Router R1 has two interfaces that were configured with correct IP addresses and subnet masks. Why does the show ip route command output not display any information about the directly connected networks??',
   'The no shutdown command was not issued on these interfaces.');
add('What happens when part of an Internet television transmission is not delivered to the destination?',
   'The transmission continues without the missing portion.');
add('Which three statements characterize the transport layer protocols? Choose three.',
   'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify the destination web browser?',
   'the destination port number');
add('Which statement is true regarding the UDP client process during a session with a server?',
   'Datagrams that arrive in a different order than that in which they were sent are not placed in order.');
add('Which two components are configured via software in order for a PC to participate in a network environment? Choose two.',
   'IP address','subnet mask');
add('What are three characteristics of multicast transmission? Choose three.',
   'A single packet can be sent to a group of hosts.','Multicast transmission can be used by routers to exchange routing information.','Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? Choose two.',
   'It eliminates most address configuration errors.','It reduces the burden on network support staff.');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
   '2001:DB8:BC15:A::0');
add('Which two tasks are functions of the presentation layer? Choose two.',
   'compression','encryption');
add('What is the purpose of the network security authentication function?',
   'to require users to prove who they are');
add('Which type of wireless security makes use of dynamic encryption keys each time a client associates with an AP?',
   'WPA');
add('Fill in the blank. During data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a message.',
   'Multicast');
add('Open the PT activity. Perform the tasks in the activity instructions and then fill in the blank.The Server0 message is . ”     ”',
   'winner');
add('A PC is configured to obtain an IP address automatically from network 192.168.1.0/24. The network administrator issues the arp –a command and notices an entry of 192.168.1.255 ff-ff-ff-ff-ff-ff. Which statement describes this entry?',
   'This is a static map entry.');
add('Which field in an IPv4 packet header will typically stay the same during its transmission?',
   'Destination Address');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.Which IPv6 address is assigned to the Serial0/0/0 interface on RT2?',
   '2001:db8:abc:5::1');

/*Updated DIC .2, 2015*/
add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
   'audio conference, financial transactions, web page');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?',
   'secretin');
add('What are the three primary functions provided by Layer 2 data encapsulation? Choose three.',
   'data link layer addressing','detection of errors through CRC calculations','delimiting groups of bits into frames');
add('What must be configured to enable Cisco Express Forwarding CEF on most Cisco devices that perform Layer 3 switching?',
   'CEF is enabled by default, so no configuration is necessary.');
add('What is the purpose of adjacency tables as used in Cisco Express Forwarding CEF?',
   'to maintain Layer 2 next-hop addresses');
add('Which statement describes a characteristic of the network layer in the OSI model?',
   'Its protocols specify the packet structure and processing used to carry the data from one host to another.');
add('A user gets an IP address of 192.168.0.1 from the company network administrator. A friend of the user at a different company gets the same IP address on another PC. How can two PCs use the same IP address and still reach the Internet, send and receive email, and search the web?',
   'ISPs use Network Address Translation to change a user IP address into an address that can be used on the Internet.');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
   'link-local');
add('Why does HTTP use TCP as the transport layer protocol?',
   'because HTTP requires reliable delivery');
add('What is the binary representation of 0xCA?',
   '11001010');
add('What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?',
   '2001:DB8:0:AB00::1234');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?​',
   '13');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
   'Hop Limit field');
add('Which statement is true about variable-length subnet masking?',
   'The size of each subnet may be different, depending on requirements.');
add('Which firewall technique blocks incoming packets unless they are responses to internal requests?',
   'stateful packet inspection');
add('A network technician is investigating network connectivity from a PC to a remote host with the address 10.1.1.5. Which command issued on the PC will return to the technician the complete path to the remote host?',
   'tracert 10.1.1.5');
add('Fill in the blank. To prevent faulty network devices from carrying dangerous voltage levels, equipment must be correctly',
   'grounded');
add('A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? Choose three.',
   'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('What is a possible hazard that can be caused by network cables in a fire?',
   'The cable insulation could be flammable.');
add('What device is commonly used to verify a UTP cable?',
   'a cable tester');
add('What needs to be checked when testing a UTP network cable?',
   'wire map');
add('Refer to the exhibit. A ping to PC2 is issued from PC0, PC1, and PC3 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
   'just PC0 and PC1 MAC addresses');
add('Which function is provided by TCP?',
   'detection of missing packets');
add('What does a router use to determine where to send data it receives from the network?',
   'a routing table');
add('Which router interface should be used for direct remote access to the router via a modem?',
   'an AUX port');
add('A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?',
   'any line configuration mode');
add('Which three statements characterize the transport layer protocols? Choose three.',
   'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('Refer to the exhibit. A TCP segment from a server has been captured by Wireshark, which is running on a host. What acknowledgement number will the host return for the TCP segment that has been received?',
   '306');
add('Which statement is true about an interface that is configured with the IPv6 address command?',
   'A link-local IPv6 address is automatically configured on the interface.');
add('Refer to the exhibit. The network administrator for a small advertising company has chosen to use the 192.168.5.96/27 network for internal LAN addressing. As shown in the exhibit, a static IP address is assigned to the company web server. However, the web server cannot access the Internet. The administrator verifies that local workstations with IP addresses that are assigned by a DHCP server can access the Internet, and the web server is able to ping local workstations. Which component is incorrectly configured?',
   'default gateway address');
add('Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?',
   '172.16.19.255');
add('A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?',
   '10.1.1.128/28',' 10.1.1.144/28','10.1.1.160/29');
add('How many additional bits should be borrowed from a /26 subnet mask in order to create subnets for WAN links that need only 2 useable addresses?',
   '4');
add(' A  l    topology influences the type of network framing and media access control that will be used.',
   'logica');
add('Refer to the exhibit. The administrator configured the access to the console and the vty lines of a router. Which conclusion can be drawn from this configuration?​',
   'Because the IOS includes the login command on the vty lines by default, access to the device via Telnet will require authentication.');
add('An administrator issued the service password-encryption command to apply encryption to the passwords configured for enable password, vty, and console lines. What will be the consequences if the administrator later issues the no service password-encryption command?',
   'It will not reverse any encryption.');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
   'The new configuration will be loaded if the switch is restarted.');
add('What are two features of ARP? Choose two.',
   'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What are two examples of the cut-through switching method? Choose two.',
   'fast-forward switching','fragment-free switching');
add(' A network administrator is enabling services on a newly installed server. Which two statements describe how services are used on a server? Choose two.',
   'A port is considered to be open when it has an active server application that is assigned to it.','Server security can be improved by closing ports that are associated with unused services.');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?',
   'to identify the network address of the destination network');
add('Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?',
   '236.17.12.10');
add('A particular telnet site does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
   'ipconfig /displaydns');
add('Fill in the blank. Network devices come in two physical configurations. Devices that have expansion slots that provide the flexibility to add new modules have a configuration.',
   'Modular');
add('Refer to the exhibit. What is the maximum TIL value that is used to reach the destination www.cisco.com?',
   '13');
add('Which statement is true about DHCP operation?',
   'When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the networK.');
add('Which type of wireless security is easily compromised?',
   'WEP');
add('A network administrator notices that the throughput on the network appears lower than expected when compared to the end-to-end network bandwidth. Which three factors can explain this difference? Choose three.',
   'the amount of traffic','the type of traffic','the number and type of network devices that the data is crossing');
add('A host PC is attempting to lease an address through DHCP. What message is sent by the server to the client know it is able to use the provided IP information?',
   'DHCPOFFER');
add('A network administrator is configuring access control to switch SW1. If the administrator uses console line to connect to the switch, which password is needed to access user EXEC mode?',
   'lineconin');
add('What is a characteristic of UTP cabling?',
   'cancellation');
add('How many bits would need to be borrowed if a network admin were given the IP addressing scheme of 172.16.0.0/16 and needed no more than 16 subnet with equal number of hosts?',
   '4');
add('It will give 4 options about ping, the correct one is:',
   'The PC2 will be able to ping 192.168.1.1');
add('Which statement best describes the operation of the File Transfer Protocol?',
   'An FTP server uses a source port number of 20 and a randomly generated destination port number during the establishment of control traffic with an FTP client.');
add('A client is establishing a TCP session with a server. How is the acknowledgment number in the response segment to the client determined?',
   'The acknowledgment number field is modified by adding 1 to the randomly chosen initial sequence number in response to the client.');
add('Why does layer 3 device perform the ANDing process on a destination IP and subnet Mask?',
   'to identify network address of destination host;');
add('There was also a question about if you activated service password encryption in the past and you prompt “no service password encryption” what password are modified ?',
   'no password at all;');
add('What type of communication rule would best describe CSMA/CD?',
   'access method');
add('What is the primary reason to subnet IPv6 prefixes?',
   'to create a hierarchical Layer 3 network design');
add('What type of IPv6 address is FE80::1?',
   'link-local');
add('Which statement describes data throughput?',
   'It is the measure of the bits transferred across the media over a given period of time.');
add('Fill in the blank. Use a number.IPv4 multicast addresses are directly mapped to IEEE 802 Ethernet MAC addresses using the last ______ of the 28 available bits in the IPv4 multicast group address.',
   '4');
add('How could a faulty network device create a source of hazard for a user? Choose two.',
   'It could stop functioning.','It could explode.');
add('What are three important considerations when planning the structure of an IP addressing scheme? Choose three.',
   'preventing duplication of addresses','providing and controlling access','conserving addresses');
add('What is the metric value that is used to reach the 10.1.1.0 network in the following routing table entry? D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0',
   '2170112');
add('Which two services or protocols use the preferred UDP protocol for fast transmission and low overhead? Choose two',
   'VoIP','DNS');
add('What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?',
   'It sends a DHCPREQUEST that identifies which lease offer the client is accepting.');
add('To what legacy address class does the address 10.0.0.0 belong?',
   'Class A');
add('What type of communication medium is used with a wireless LAN connection?',
   'microwave');
add('Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?',
   'SLAAC');
add('What is a characteristic of DNS?',
   'DNS servers can cache recent queries to reduce DNS query traffic.');
add('What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?',
   '2001:DB8:BC15:A');
add('What are two services provided by the OSI network layer? Choose two.',
   'encapsulating PDUs from the transport layer','routing packets toward the destination');
add('What information is maintained in the CEF adjacency table?',
   'Layer 2 next hops NOT SURE NO ANSWER');
add('A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? Choose two.',
   'voice','video');

/*Final exam*/

add('Which communication tool allows real-time collaboration?',
	'instant messaging');
add('A host is accessing a Web server on a remote network. Which three functions are performed by intermediary network devices during this conversation? Choose three.',
	'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
	'DSL');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?',
	'WAN');
add('Refer to the exhibit. From which location did this router load the IOS?',
	'flash memory');
add('Which connection provides a secure CLI session with encryption to a Cisco network device?',
	'an SSH connection');
add('Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?',
	'The administrator must first enter privileged EXEC mode before issuing the command.');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?',
	'to interrupt the ping process');
add('What function does pressing the Tab key have when entering a command in IOS?',
	'It completes the remainder of a partially typed word in a command.');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
	'Switch config #?');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?',
	'linevtyin');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
	'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. Which action will be successful?',
	'PC2 can send a ping to 192.168.1.1.');
add('Which IPv4 address can be pinged to test the internal TCP/IP operation of a host?',
	'127.0.0.1');
add('What three application layer protocols are part of the TCP/IP protocol suite? Choose three.',
	'DHCP','DNS','FTP');
add('Which two protocols function at the internet layer? Choose two.',
	'ICMP','IP');
add('Which publicly available resources describe protocols, processes, and technologies for the Internet but do not give implementation details?',
	'Request for Comments');
add('Which address on a PC does not change, even if the PC is moved to a different network?',
	'MAC address');
add('What is the protocol that is used to discover a physical address from a known logical address and what message type does it use?',
	'ARP, broadcast');
add('What will happen if the default gateway address is incorrectly configured on a host?',
	'The host cannot communicate with hosts in other networks.');
add('What is an important function of the physical layer of the OSI model?',
	'It encodes frames into electrical, optical, or radio wave signals.');
add('Which procedure is used to reduce the effect of crosstalk in copper cables?',
	'twisting opposing circuit wire pairs together');
add('Which two statements describe the characteristics of fiber-optic cabling? Choose two.',
	'Fiber-optic cabling does not conduct electricity.','Fiber-optic cabling is primarily used as backbone cabling.');
add('What is contained in the trailer of a data-link frame?',
	'error detection');
add('What is the auto-MDIX feature on a switch',
	'crossover Ethernet cable connection');
add('Refer to the exhibit. A ping to PC3 is issued from PC0, PC1, and PC2 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
	'just PC0 and PC1 MAC addresses');
add('How does a Layer 3 switch differ from a Layer 2 switch?',
	'An IP address can be assigned to a physical port of a Layer 3 switch. However, this is not supported in Layer 2 switches.');
add('What is the purpose of the routing process?',
	'to select the paths that are used to direct traffic to destination networks');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
	'NAT');
add('Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?',
	'It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.');
add('Which of the following are primary functions of a router? Choose two.',
	'packet switching','path selection');
add('Which two statements correctly describe a router memory type and its contents? Choose two.',
	'RAM is volatile and stores the running configuration.','ROM is nonvolatile and stores bootup information.');
add('In which default order will a router search for startup configuration information?',
	'NVRAM, TFTP, setup mode');
add('What happens when part of an Internet VoIP transmission is not delivered to the destination?',
	'The transmission continues without the missing portion.');
add('Which three IP addresses are private ? Choose three.',
	'10.172.168.1','172.20.4.4','192.168.5.254');
add('How many bits make up the single IPv6 hextet :10CD:?',
	'16');
add('What is the effect of configuring the ipv6 unicast-routing command on a router?',
	'to enable the router as an IPv6 router');
add('Which group of IPv6 addresses cannot be allocated as a host source address?',
	'FF00::/8');
add('What is the purpose of ICMP messages?',
	'to provide feedback of IP packet transmissions');
add('Refer to the exhibit. A technician has configured a user workstation with the IP address and default subnet masks that are shown. Although the user can access all local LAN resources, the user cannot access any Internet sites by using either FQDN or IP addresses. Based upon the exhibit, what could account for this failure?',
	'The default gateway address in incorrect.');
add('Which subnet would include the address 192.168.1.96 as a usable host address?',
	'192.168.1.64/26');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
	'predictable static IP addresses for easier identification');
add('Refer to the exhibit. Which IP addressing scheme should be changed?',
	'Site 2');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? Choose two.',
	'/64','/68');
add('A host PC has just booted and is attempting to lease an address through DHCP. Which two messages will the client typically broadcast on the network? Choose two.',
	'DHCPDISCOVER','DHCPREQUEST');
add('What is the purpose of the network security accounting function?',
	'to keep track of the actions of a user');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?',
	'login block-for 60 attempts 5 within 60');
add('A particular website does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
	'ipconfig /displaydns');
add('When the router prompts for an address or remote host name, what IP address should the administrator enter at the prompt?',
	'192.168.11.252');
add('What two preconfigured settings that affect security are found on most new wireless routers? Choose two.',
	'broadcast SSID','default administrator password');
add('Which type of wireless security generates dynamic encryption keys each time a client associates with an AP?',
	'WPA');
add('is a best-effort, connectionless application layer protocol that is used to transfer files.',
	'TFTP');
add('Which two components are necessary for a wireless client to be installed on a WLAN? Choose two.',
	'wireless NIC','wireless client software');
add('The prefix-length for the range of addresses is',
	'/60 ');
add('A host is accessing an FTP server on a remote network. Which three functions are performed by intermediary network devices during this conversation? Choose three.',
	'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('When is a dial-up connection used to connect to an ISP?',
	'when a regular telephone line is used');
add('On a school network, students are surfing the web, searching the library database, and attending an audio conference with their sister school in Japan. If network traffic is prioritized with QoS, how will the traffic be classified from highest priority to lowest priority?',
	'audio conference, database, HTTP');
add('During normal operation, from which location do most Cisco routers run the IOS?',
	'RAM');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?',
	'an SSH connection');
add('Which keys act as a hot key combination that is used to interrupt an IOS process?',
	'Ctrl-Shift-6');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
	'Switch config#?');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?',
	'The new configuration will be loaded if the switch is restarted.');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?',
	'VLAN 1');
add('A technician uses the ping 127.0.0.1 command. What is the technician testing?',
	'the TCP/IP stack on a network host');
add('Which device should be used for enabling a host to communicate with another host on a different network?',
	'router');
add('A network technician is measuring the transfer of bits across the company backbone for a mission critical application. The technician notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? Choose three.',
	'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('Which characteristics describe fiber optic cable? Choose two.',
	'It is not affected by EMI or RFI.','It is the most expensive type of LAN cabling');
add('What are two features of a physical, star network topology? Choose two.',
	'It is straightforward to troubleshoot.','It is easy to add and remove end devices.');
add('A frame is transmitted from one networking device to another. Why does the receiving device check the FCS field in the frame?',
	'to check the frame for possible transmission errors');
add('What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?',
	'It forwards the frame out of all ports except for the port at which the frame was received.');
add('Which switching method has the lowest level of latency?',
	'fast-forward');
add('Which parameter does the router use to choose the path to the destination when there are multiple routes available?',
	'the lower metric value that is associated with the destination network');
add('Which two statements describe the functions or characteristics of ROM in a router? Choose two.',
	'maintains instructions for POST diagnostics','stores bootstrap program');
add('Which statement describes a characteristic of the Cisco router management ports?',
	'A console port is not used for packet forwarding.');
add('What happens when part of an Internet radio transmission is not delivered to the destination?',
	'The transmission continues without the missing portion.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?',
	'203.0.113.211');
add('Which three IP addresses are private ? Choose three.',
	'10.20.30.1','172.30.5.3','192.168.5.5');
add('What types of addresses make up the majority of addresses within the /8 block IPv4 bit space?',
	'public addresses');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?',
	'13');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? Choose two.',
	'192.168.1.64/27','192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
	'/25');
add('Which protocol supports rapid delivery of streaming media?',
	'Real-Time Transport Protocol');
add('Why would a network administrator use the tracert utility?',
	'to identify where a packet was lost or delayed on a network');
add('Refer to the exhibit. What is the significance of the asterisk * in the exhibited output?',
	'The asterisk designates which file system is the default file system.');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
	'WPA');
add('Point-to-point communications where both devices can transmit and receive on the medium at the same time are known as',
	'full-duplex');
add('A host is accessing a Telnet server on a remote network. Which three functions are performed by intermediary network devices during this conversation? Choose three.',
	'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('Refer to the exhibit. Which area would most likely be an extranet for the company network that is shown?',
	'area C');
add('What is the purpose of having a converged network?',
	'to reduce the cost of deploying and maintaining the communication infrastructure');
add('Three office workers are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other office workers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
	'audio conference, financial transactions, web page');
add('During normal operation, from which location do most Cisco switches and routers run the IOS?',
	'RAM');
add('A network administrator is making changes to the configuration of a router. After making the changes and verifying the results, the administrator issues the copy running-config startup-config command. What will happen after this command executes?',
	'The configuration will load when the router is restarted.');
add('What information does the loopback test provide?',
	'The TCP/IP stack on the device is working correctly.');
add('What is a characteristic of the LLC sublayer?',
	'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('What method is used to manage contention-based access on a wireless network?',
	'CSMA/CA');
add('What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?',
	'The switch drops the frame.');
add('Which destination address is used in an ARP request frame?',
	'FFFF.FFFF.FFFF');
add('What is the auto-MDIX feature on a switch?',
	'the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?',
	'store-and-forward switching');
add('What are the two main components of Cisco Express Forwarding CEF? Choose two.',
	'adjacency tables','forwarding information base FIB');
add('Which statement describes the sequence of processes executed by a router when it receives a packet from a host to be delivered to a host on another network?',
	'It de-encapsulates the packet, selects the appropriate path, and encapsulates the packet to forward it toward','the destination host.');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
	'NAT');
add('Refer to the exhibit. Router R1 has two interfaces that were configured with correct IP addresses and subnet masks. Why does the show ip route command output not display any information about the directly connected networks?',
	'The no shutdown command was not issued on these interfaces.');
add('What happens when part of an Internet television transmission is not delivered to the destination?',
	'The transmission continues without the missing portion.');
add('Which three statements characterize the transport layer protocols? Choose three.',
	'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify the destination web browser?',
	'the destination port number');
add('Which statement is true regarding the UDP client process during a session with a server?',
	'Datagrams that arrive in a different order than that in which they were sent are not placed in order.');
add('Which two components are configured via software in order for a PC to participate in a network environment? Choose two.',
	'IP address','subnet mask');
add('What are three characteristics of multicast transmission? Choose three.',
	'A single packet can be sent to a group of hosts.','Multicast transmission can be used by routers to exchange routing information.','Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? Choose two.',
	'It eliminates most address configuration errors.','It reduces the burden on network support staff.');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
	'2001:DB8:BC15:A::0');
add('Which two tasks are functions of the presentation layer? Choose two.',
	'compression','encryption');
add('What is the purpose of the network security authentication function?',
	'to require users to prove who they are');
add('Which type of wireless security makes use of dynamic encryption keys each time a client associates with an AP?',
	'WPA');
add('During data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a message.',
	'Multicast');
add('Open the PT activity. Perform the tasks in the activity instructions and then fill in the blank. The Server0 message is winner');
add('A PC is configured to obtain an IP address automatically from network 192.168.1.0/24. The network administrator issues the arp –a command and notices an entry of 192.168.1.255 ff-ff-ff-ff-ff-ff. Which statement describes this entry?',
	'This is a static map entry.');
add('Which field in an IPv4 packet header will typically stay the same during its transmission?',
	'Destination Address');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which IPv6 address is assigned to the Serial0/0/0 interface on RT2?',
	'2001:db8:abc:5::1');
add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
	'audio conference, financial transactions, web page');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?',
	'secretin');
add('What are the three primary functions provided by Layer 2 data encapsulation? Choose three.',
	'data link layer addressing','detection of errors through CRC calculations','delimiting groups of bits into frames');
add('What must be configured to enable Cisco Express Forwarding CEF on most Cisco devices that perform Layer 3 switching?',
	'CEF is enabled by default, so no configuration is necessary.');
add('What is the purpose of adjacency tables as used in Cisco Express Forwarding CEF?',
	'to maintain Layer 2 next-hop addresses');
add('Which statement describes a characteristic of the network layer in the OSI model?',
	'Its protocols specify the packet structure and processing used to carry the data from one host to another.');
add('A user gets an IP address of 192.168.0.1 from the company network administrator. A friend of the user at a different company gets the same IP address on another PC. How can two PCs use the same IP address and still reach the Internet, send and receive email, and search the web?',
	'ISPs use Network Address Translation to change a user IP address into an address that can be used on the Internet.');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
	'link-local');
add('Why does HTTP use TCP as the transport layer protocol?',
	'because HTTP requires reliable delivery');
add('What is the binary representation of 0xCA?',
	'11001010');
add('What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?',
	'2001:DB8:0:AB00::1234');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?',
	'13');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
	'Hop Limit field');
add('Which statement is true about variable-length subnet masking?',
	'The size of each subnet may be different, depending on requirements.');
add('Which firewall technique blocks incoming packets unless they are responses to internal requests?',
	'stateful packet inspection');
add('A network technician is investigating network connectivity from a PC to a remote host with the address 10.1.1.5. Which command issued on the PC will return to the technician the complete path to the remote host?',
	'tracert 10.1.1.5');
add('To prevent faulty network devices from carrying dangerous voltage levels, equipment must be correctly',
	'grounded');
add('A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? Choose three.',
	'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('What is a possible hazard that can be caused by network cables in a fire?',
	'The cable insulation could be flammable.');
add('What device is commonly used to verify a UTP cable?',
	'a cable tester');
add('What needs to be checked when testing a UTP network cable?',
	'wire map');
add('Refer to the exhibit. A ping to PC2 is issued from PC0, PC1, and PC3 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
	'just PC0 and PC1 MAC addresses');
add('Which function is provided by TCP?',
	'detection of missing packets');
add('What does a router use to determine where to send data it receives from the network?',
	'a routing table');
add('Which router interface should be used for direct remote access to the router via a modem?',
	'an AUX port');
add('A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?',
	'any line configuration mode');
add('Which three statements characterize the transport layer protocols? Choose three.',
	'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('Refer to the exhibit. A TCP segment from a server has been captured by Wireshark, which is running on a host. What acknowledgement number will the host return for the TCP segment that has been received?',
	'306');
add('Which statement is true about an interface that is configured with the IPv6 address command?',
	'A link-local IPv6 address is automatically configured on the interface.');
add('Refer to the exhibit. The network administrator for a small advertising company has chosen to use the 192.168.5.96/27 network for internal LAN addressing. As shown in the exhibit, a static IP address is assigned to the company web server. However, the web server cannot access the Internet. The administrator verifies that local workstations with IP addresses that are assigned by a DHCP server can access the Internet, and the web server is able to ping local workstations. Which component is incorrectly configured?',
	'default gateway address');
add('Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?',
	'172.16.19.255');
add('A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?',
	'10.1.1.128/28','10.1.1.144/28','10.1.1.160/29');
add('How many additional bits should be borrowed from a /26 subnet mask in order to create subnets for WAN links that need only 2 useable addresses?',
	'4');
add('A topology influences the type of network framing and media access control that will be used.',
	'logical');
add('Refer to the exhibit. The administrator configured the access to the console and the vty lines of a router. Which conclusion can be drawn from this configuration?​',
	'Because the IOS includes the login command on the vty lines by default, access to the device via Telnet will require authentication.');
add('An administrator issued the service password-encryption command to apply encryption to the passwords configured for enable password, vty, and console lines. What will be the consequences if the administrator later issues the no service password-encryption command?',
	'It will not reverse any encryption.');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
	'The new configuration will be loaded if the switch is restarted.');
add('What are two features of ARP? Choose two.',
	'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What are two examples of the cut-through switching method? Choose two.',
	'fast-forward switching','fragment-free switching');
add('A network administrator is enabling services on a newly installed server. Which two statements describe how services are used on a server? Choose two.',
	'A port is considered to be open when it has an active server application that is assigned to it.','Server security can be improved by closing ports that are associated with unused services.');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?',
	'to identify the network address of the destination network');
add('Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?',
	'236.17.12.10');
add('A particular telnet site does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
	'ipconfig /displaydns');
add('Network devices come in two physical configurations. Devices that have expansion slots that provide the flexibility to add new modules have a configuration.',
	'Modular');
add('Refer to the exhibit. What is the maximum TIL value that is used to reach the destination www.cisco.com?',
	'13');
add('Which statement is true about DHCP operation?',
	'When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the networK.');
add('Which type of wireless security is easily compromised?',
	'WEP');
add('A network administrator notices that the throughput on the network appears lower than expected when compared to the end-to-end network bandwidth. Which three factors can explain this difference? Choose three.',
	'the amount of traffic','the type of traffic','the number and type of network devices that the data is crossing');
add('A host PC is attempting to lease an address through DHCP. What message is sent by the server to the client know it is able to use the provided IP information?',
	'DHCPOFFER');
add('A network administrator is configuring access control to switch SW1. If the administrator uses console line to connect to the switch, which password is needed to access user EXEC mode?',
	'lineconin');
add('What is a characteristic of UTP cabling?',
	'cancellation');
add('How many bits would need to be borrowed if a network admin were given the IP addressing scheme of 172.16.0.0/16 and needed no more than 16 subnet with equal number of hosts?',
	'4');
add('It will give 4 options about ping, the correct one is:',
	'The PC2 will be able to ping 192.168.1.1');
add('Which statement best describes the operation of the File Transfer Protocol?',
	'An FTP server uses a source port number of 20 and a randomly generated destination port number during the establishment of control traffic with an FTP client.');
add('A client is establishing a TCP session with a server. How is the acknowledgment number in the response segment to the client determined?',
	'The acknowledgment number field is modified by adding 1 to the randomly chosen initial sequence number in response to the client.');
add('Why does layer 3 device perform the ANDing process on a destination IP and subnet Mask?',
	'to identify network address of destination host;');
add('There was also a question about if you activated service password encryption in the past and you prompt “no service password encryption” what password are modified ?',
	'no password at all;');
add('What type of communication rule would best describe CSMA/CD?',
	'access method');
add('What is the primary reason to subnet IPv6 prefixes?',
	'to create a hierarchical Layer 3 network design');
add('What type of IPv6 address is FE80::1?',
	'link-local');
add('Which statement describes data throughput?',
	'It is the measure of the bits transferred across the media over a given period of time.');
add('IPv4 multicast addresses are directly mapped to IEEE 802 Ethernet MAC addresses using the last of the 28 available bits in the IPv4 multicast group address.',
	'4');
add('How could a faulty network device create a source of hazard for a user? Choose two.',
	'It could stop functioning.','It could explode.');
add('What are three important considerations when planning the structure of an IP addressing scheme? Choose three.',
	'preventing duplication of addresses','providing and controlling access','conserving addresses');
add('What is the metric value that is used to reach the 10.1.1.0 network in the following routing table entry? D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0',
	'2170112');
add('Which two services or protocols use the preferred UDP protocol for fast transmission and low overhead? Choose two',
	'VoIP','DNS');
add('What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?',
	'It sends a DHCPREQUEST that identifies which lease offer the client is accepting.');
add('To what legacy address class does the address 10.0.0.0 belong?',
	'Class A');
add('What type of communication medium is used with a wireless LAN connection?',
	'microwave');
add('Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?',
	'SLAAC');
add('What is a characteristic of DNS?',
	'DNS servers can cache recent queries to reduce DNS query traffic.');
add('What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?',
	'2001:DB8:BC15:A');
add('What are two services provided by the OSI network layer? Choose two.',
	'encapsulating PDUs from the transport layer','routing packets toward the destination');
add('A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? Choose two.',
	'voice','video');

/*V5.1 Practice Final Exam*/

add('Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?',
	'extranet');
add('A small business user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
	'DSL');
add('Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?',
	'The administrator must first enter privileged EXEC mode before issuing the command.');
add('Which keys act as a hot key combination that is used to interrupt an IOS process?',
	'Ctrl-Shift-6');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?',
	'linevtyin');
add('A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?',
	'This command prevents someone from viewing the running configuration passwords.');
add('What is the purpose of the SVI on a Cisco switch?',
	'The SVI provides a virtual interface for remote access to the switch.');
add('Which message delivery option is used when all devices need to receive the same message simultaneously?',
	'broadcast');
add('Which two protocols function at the internet layer? Choose two.',
	'ICMP','IP');
add('What PDU is associated with the transport layer?',
	'segment');
add('What is done to an IP packet before it is transmitted over the physical medium?',
	'It is encapsulated in a Layer 2 frame.');
add('What type of communication medium is used with a wireless LAN connection?',
	'radio waves');
add('In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? Choose two.',
	'crosstalk','electromagnetic interference');
add('What are the two sublayers of the OSI model data link layer? Choose two.',
	'LLC','MAC');
add('A technician has been asked to develop a physical topology for a network that provides a high level of redundancy. Which physical topology requires that every node is attached to every other node on the network?',
	'mesh');
add('What type of communication rule would best describe CSMA/CD?',
	'access method');
add('If data is being sent over a wireless network, then connects to an Ethernet network, and eventually connects to a DSL connection, which header will be replaced each time the data travels through a network infrastructure device?',
	'data link');
add('What best describes the destination IPv4 address that is used by multicasting?',
	'a single IP multicast address that is used by all destinations in a group');
add('In an Ethernet network, when a device receives a frame of 1200 bytes, what will it do?',
	'process the frame as it is');
add('What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?',
	'destination MAC address');
add('What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?',
	'It forwards the frame out of all ports except for the port at which the frame was received.');
add('What are two features of ARP? Choose two.',
	'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('Which two services are required to enable a computer to receive dynamic IP addresses and access the Internet using domain names? Choose two.',
	'DNS','DHCP');
add('What is a basic characteristic of the IP protocol?',
	'connectionless');
add('Refer to the exhibit. A user issues the command netstat –r on a workstation. Which IPv6 address is one of the link-local addresses of the workstation?',
	'fe80::30d0:115:3f57:fe4c/128');
add('Which two statements correctly describe a router memory type and its contents? Choose two.',
	'RAM is volatile and stores the IP routing table.','ROM is nonvolatile and contains basic diagnostic software.');
add('What three blocks of addresses are defined by RFC 1918 for private network use? Choose three.',
	'10.0.0.0/8','172.16.0.0/12','192.168.0.0/16');
add('What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?',
	'2001:DB8:0:AB00::1234');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
	'link-local');
add('An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?',
	'all IPv6 configured routers on the local link');
add('What is the purpose of ICMP messages?',
	'to provide feedback of IP packet transmissions');
add('Which statement describes a characteristic of the traceroute utility?',
	'It identifies the routers in the path from a source host to a destination host.');
add('What is the usable number of host IP addresses on a network that has a /26 mask?', '62');
add('Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?',
	'172.16.19.255');
add('A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?',
	'10.1.1.128/28','10.1.1.144/28','10.1.1.160/29');
add('Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?',
	'2001:db8:0:f000::/52');
add('A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?',
	'The data flow is being tracked based on the source port number utilized by each application');
add('What three services are provided by the transport layer? Choose three.',
	'flow control','connection establishment','error recovery');
add('An Internet television transmission is using UDP. What happens when part of the transmission is not delivered to the destination?',
	'The transmission continues without the missing portion.');
add('Which two OSI model layers are considered to be included in the top layer of the TCP/IP protocol stack? Choose two.',
	'presentation','session');
add('An author is uploading one chapter document from a personal computer to a file server of a book publisher. What role is the personal computer assuming in this network model?',
	'client');
add('Which two automatic addressing assignments are supported by DHCP? Choose two.',
	'subnet mask','default gateway address');
add('When a network administrator is trying to manage network traffic on a growing network, when should traffic flow patterns be analyzed?',
	'during times of peak utilization');
add('What is the objective of a network reconnaissance attack?',
	'discovery and mapping of systems');
add('What will be the result of failed login attempts if the following command is entered into a router? login block-for 150 attempts 4 within 90',
	'All login attempts will be blocked for 150 seconds if there are 4 failed attempts within 90 seconds.');
add('What is an advantage of storing configuration files to a USB flash drive instead of to a TFTP server?',
	'The transfer of the files does not rely on network connectivity');

/*Tests for 416 special*/
add('What is a characteristic of a fault tolerant network?', 'a network that recovers quickly when a failure occurs and depends on redundancy to limit the impact of a failure');
add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?', ' audio conference, financial transactions, web page');
add('What is a benefit of using cloud computing in networking?', 'Network capabilities are extended without requiring investment in new infrastructure, personnel, or software.');
add('What is the function of the shell in an OS?', 'It interfaces between the users and the kernel.');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?', 'an SSH connection');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?', 'to interrupt the ping process');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses a console connection to connect to the switch, which password is needed to access user EXEC mode?', 'lineconin');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?', 'VLAN 1');
add('What protocol is responsible for controlling the size of segments and the rate at which segments are exchanged between a web client and a web server?', 'TCP');
add('What is an advantage to using a protocol that is defined by an open standard?', 'It encourages competition and promotes choices.');
add('What are two benefits of using a layered network model? Choose two.', 'It assists in protocol design.', 'It prevents technology in one layer from affecting other layers.');
add('Which two OSI model layers have the same functionality as two layers of the TCP/IP model? Choose two.', 'network', 'transport');
add('Which name is assigned to the transport layer PDU?', 'segment');
add('A network administrator is troubleshooting connectivity issues on a server. Using a tester, the administrator notices that the signals generated by the server NIC are distorted and not usable. In which layer of the OSI model is the error categorized?', 'physical layer');
add('A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? Choose three.', 'the amount of traffic that is currently crossing the network', 'the type of traffic that is crossing the network', 'the latency that is created by the number of network devices that the data is crossing');
add('What is a characteristic of UTP cabling?', 'cancellation');
add('What are two characteristics of fiber-optic cable? Choose two.', 'It is not affected by EMI or RFI.', 'It is more expensive than UTP cabling is.');
add('What is a characteristic of the LLC sublayer?', 'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('A network team is comparing physical WAN topologies for connecting remote sites to a headquarters building. Which topology provides high availability and connects some, but not all, remote sites?', 'partial mesh');
add('What method is used to manage contention-based access on a wireless network?', 'CSMA/CA');
add('What are the three primary functions provided by Layer 2 data encapsulation? Choose three.', 'data link layer addressing', 'detection of errors through CRC calculations', 'delimiting groups of bits into frames');
add('What will a host on an Ethernet network do if it receives a frame with a destination MAC address that does not match its own MAC address?', 'It will discard the frame.');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?', 'store-and-forward switching');
add('Refer to the exhibit. If host A sends an IP packet to host B, what will the destination address be in the frame when it leaves host A?', 'BB:BB:BB:BB:BB:BB');
add('What addresses are mapped by ARP?', 'destination MAC address to a destination IPv4 address');
add('What are two services provided by the OSI network layer? Choose two.', 'routing packets toward the destination ', 'encapsulating PDUs from the transport layer');
add('What are two functions of NVRAM? Choose two.', 'to retain contents when power is removed', 'to store the startup configuration file');
add('Refer to the exhibit. What will be the result of entering this configuration the next time a network administrator connects a console cable to the router and no additional commands have been entered?', 'The administrator will be presented with the R1> prompt.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?', '203.0.113.211');
add('What are three characteristics of multicast transmission? Choose three.', 'A single packet can be sent to a group of hosts.', 'Multicast transmission can be used by routers to exchange routing information.', 'Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('What are the three ranges of IP addresses that are reserved for internal private use? Choose three.', '10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16');
add('What purpose does NAT64 serve in IPv6?', 'It converts IPv6 packets into IPv4 packets.');
add('What is the most compressed representation of the IPv6 address 2001:0000:0000:abcd:0000:0000:0000:0001?', '2001:0:0:abcd::1');
add('Which range of link-local addresses can be assigned to an IPv6-enabled interface?', 'FE80::/10');
add('How many valid host addresses are available on an IPv4 subnet that is configured with a /26 mask?', '62');
add('A site administrator has been told that a particular network at the site must accommodate 126 hosts. Which subnet mask would be used that contains the required number of host bits?', '255.255.255.128');
add('Which subnet would include the address 192.168.1.96 as a usable host address?', '192.168.1.64/26');
add('Which statement is true about variable-length subnet masking?', 'The size of each subnet may be different, depending on requirements.');
add('Which scenario describes a function provided by the transport layer?', 'A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify which of the three web browsers should receive the reply?', 'the destination port number');
add('What are two ways that TCP uses the sequence numbers in a segment? Choose two.', 'to identify missing segments at the destination ', 'to reassemble the segments at the remote location');
add('Which two tasks are functions of the presentation layer? Choose two.', 'compression', 'encryption');
add('What is a key characteristic of the peer-to-peer networking model?', 'resource sharing without a dedicated server');
add('A technician can ping the IP address of the web server of a remote company but cannot successfully ping the URL address of the same web server. Which software utility can the technician use to diagnose the problem?', 'nslookup');
add('Which domain name would be an example of a top-level domain?', '.com');
add('A PC obtains its IP address from a DHCP server. If the PC is taken off the network for repair, what happens to the IP address configuration?', 'The address is returned to the pool for reuse when the lease expires.');
add('A wireless host needs to request an IP address. What protocol would be used to process the request?', 'DHCP');
add('Which example of malicious code would be classified as a Trojan horse?', 'malware that was written to look like a video game');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?', 'login block-for 60 attempts 5 within 60');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?', 'WAN');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?', 'DSL');
add('How does quality of service help a network support a wide range of applications and services?', 'by providing mechanisms to manage congested network traffic');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?', 'VLAN 1');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?', 'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?', 'secretin');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?', 'an SSH connection');
add('A network technician is attempting to configure an interface by entering the following command: SanJose config # ip address 192.168.2.1 255.255.255.0. The command is rejected by the device. What is the reason for this?', 'an SSH connection', 'The command is being entered from the wrong mode of operation.');
add('What function does pressing the Tab key have when entering a command in IOS?', 'It completes the remainder of a partially typed word in a command.');
add('What protocol is responsible for controlling the size of segments and the rate at which segments are exchanged between a web client and a web server?', 'TCP');
add('What layer is responsible for routing messages through an internetwork in the TCP/IP model?', 'internet');
add('Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?', 'Segments are sent from the transport layer to the internet layer.');
add('What unique address is embedded in an Ethernet NIC and used for communication on an Ethernet network?', 'MAC address');
add('A network administrator is troubleshooting connectivity issues on a server. Using a tester, the administrator notices that the signals generated by the server NIC are distorted and not usable. In which layer of the OSI model is the error categorized?', 'physical layer')
add('Which procedure is used to reduce the effect of crosstalk in copper cables?', 'twisting opposing circuit wire pairs together');
add('What is a characteristic of the LLC sublayer?', 'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?', 'The physical address is added.');
add('What are two characteristics of Ethernet MAC addresses? Choose two.', 'They are globally unique.', 'They are expressed as 12 hexadecimal digits.');
add('If a device receives an Ethernet frame of 60 bytes, what will it do?', 'drop the frame');
add('What will a host on an Ethernet network do if it receives a frame with a destination MAC address that does not match its own MAC address?', 'It will discard the frame.');
add('Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? Choose two.', 'The frame has the broadcast address as the destination address. ', 'The destination address is unknown to the switch.');
add('Which two commands can be used on a Windows host to display the routing table? Choose two.', 'route print', 'netstat -r');
add('Which two functions are primary functions of a router? Choose two.', 'packet forwarding', 'path selection');
add('What are the three ranges of IP addresses that are reserved for internal private use? Choose three.', ' 10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16');
add('What purpose does NAT64 serve in IPv6?', 'It converts IPv6 packets into IPv4 packets.');
add('Which service provides dynamic global IPv6 addressing to end devices without using a server that keeps a record of available IPv6 addresses?', 'SLAAC');
add('What is the purpose of the command ping ::1?', 'It tests the internal configuration of an IPv6 host.');
add('How many usable IP addresses are available on the 192.168.1.0/27 network?', '30');
add('A network administrator wants to have the same subnet mask for three subnetworks at a small site. The site has the following networks and numbers of devices:  Subnetwork A: IP phones – 10 addresses  Subnetwork B: PCs – 8 addresses  Subnetwork C: Printers – 2 addresses', '255.255.255.240');
add('What subnet mask is needed if an IPv4 network has 40 devices that need IP addresses and address space is not to be wasted?', '255.255.255.192');
add('What are two characteristics shared by TCP and UDP? Choose two.', 'port numbering', 'use of checksum');
add('Why are port numbers included in the TCP header of a segment?', 'to enable a receiving host to forward the data to the appropriate application');
add('Which two protocols operate at the highest layer of the TCP/IP protocol stack? Choose two.', 'DNS', 'POP');
add('What is one difference between the client-server and peer-to-peer network models?', 'Every device in a peer-to-peer network can function as a client or a server.');
add('Which networking model is being used when an author uploads one chapter document to a file server of a book publisher?', 'client/server');
add('What network service resolves the URL entered on a PC to the IP address of the destination server?', 'DNS');
add('A network engineer is analyzing reports from a recently performed network baseline. Which situation would depict a possible latency issue?', 'an increase in host-to-host ping response times');
add('Which firewall feature is used to ensure that packets coming into a network are legitimate responses to requests initiated from internal hosts?', 'stateful packet inspection');
add('During data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a Multicast message.', 'Multicast');
add('A medium-sized business is researching available options for connecting to the Internet. The company is looking for a high speed option with dedicated, symmetric access. Which connection type should the company choose?', 'leased line');
add('What characteristic of a network enables it to quickly grow to support new users and applications without impacting the performance of the service being delivered to existing users?', 'scalability');
add('After several configuration changes are made to a router, the copy running-configuration startup-configuration command is issued. Where will the changes be stored?', 'NVRAM');
add('Refer to the exhibit. From global configuration mode, an administrator is attempting to create a message-of-the-day banner by using the command banner motd V Authorized access only! Violators will be prosecuted! V When users log in using Telnet, the banner does not appear correctly. What is the problem?', 'The delimiting character appears in the banner message.');
add('What are three characteristics of an SVI? Choose three.', 'It is not associated with any physical interface on a switch.', 'It provides a means to remotely manage a switch.', 'It is associated with VLAN1 by default.');
add('A technician configures a switch with these commands:SwitchA config # interface vlan 1  SwitchA config-if # ip address 192.168.1.1 255.255.255.0  SwitchA config-if # no shutdown What is the technician configuring?', 'SVI');
add('In computer communication, what is the purpose of message encoding?', 'to convert information to the appropriate form for transmission');
add('What protocol is responsible for controlling the size of segments and the rate at which segments are exchanged between a web client and a web server?', 'TCP');
add('What is the process of dividing a data stream into smaller pieces before transmission?', 'segmentation');
add('When IPv4 addressing is manually configured on a web server, which property of the IPv4 configuration identifies the network and host portion for an IPv4 address?', 'subnet mask');
add('A network administrator is troubleshooting connectivity issues on a server. Using a tester, the administrator notices that the signals generated by the server NIC are distorted and not usable. In which layer of the OSI model is the error categorized?', 'physical layer');
add('Which type of UTP cable is used to connect a PC to a switch port?', 'straight-through');
add('What will a host on an Ethernet network do if it receives a frame with a destination MAC address that does not match its own MAC address?', 'It will discard the frame.');
add('What are two actions performed by a Cisco switch? Choose two.', 'using the source MAC addresses of frames to build and maintain a MAC address table', 'utilizing the MAC address table to forward frames via the destination MAC address');
add('What information is added during encapsulation at OSI Layer 3?', 'source and destination IP address');
add('Which three addresses are valid public addresses? Choose three.', ' 198.133.219.17', '128.107.12.117', '64.104.78.227 ');
add('Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? Choose two.', 'There is connectivity between this device and the device at 192.168.100.1.', 'There are 4 hops between this device and the device at 192.168.100.1.');
add('How many hosts are addressable on a network that has a mask of 255.255.255.248?', '6');
add('Refer to the exhibit. Consider the IP address of 192.168.10.0/24 that has been assigned to a high school building. The largest network in this building has 100 devices. If 192.168.10.0 is the network number for the largest network, what would be the network number for the next largest network, which has 40 devices?', '192.168.10.128');
add('In what two situations would UDP be the preferred transport protocol over TCP? Choose two.', 'when a faster delivery mechanism is needed', 'when applications do not need to guarantee delivery of the data');
add('What important information is added to the TCP/IP transport layer header to ensure communication and connectivity with a remote network device?', 'destination and source port numbers');
add('What is the TCP mechanism used in congestion avoidance?', 'sliding window');
add('Which three statements characterize UDP? Choose three.', 'UDP provides basic connectionless transport layer functions.', 'UDP relies on application layer protocols for error detection. ', 'UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.');
add('Which two protocols operate at the highest layer of the TCP/IP protocol stack? Choose two.', 'DNS', 'POP');
add('Which two roles can a computer assume in a peer-to-peer network where a file is being shared between two computers? Choose two.', 'client', 'server');
add('What is the function of the HTTP GET message?', 'to request an HTML page from a web server');
add('When planning for network growth, where in the network should packet captures take place to assess network traffic?', 'on as many different network segments as possible');
add('Refer to the exhibit. An administrator is testing connectivity to a remote device with the IP address 10.1.1.1. What does the output of this command indicate?', 'A router along the path did not have a route to the destination.');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */

add('Надеюсь, что делал это не просто так. И хоть кто-нибудь проставит мне хотя бы шоколадку');
add('Прости, Олег, но, похоже, нет...');

add('Protect the network from unauthorized access. -> security');
add('Provide redundant links and devices. -> fault tolerance');
add('Expand the network without degrading the service for existing users. -> scalability');

add('CLI -> users interact with the operating system by typing commands');
add('GUI -> enables the user to interact with the operating system by pointing and clicking');
add('kernel -> the part of the OS that interacts directly with the device hardware');
add('shell -> the part of the operating system that interfaces with applications and the user');

add('Application layer -> HTTP and FTP, end user program functionality');
add('Presentation layer -> compression, common format');
add('Session layer -> dialog maintenance');

add('locale and load the Cisco IOS software -> phase 2');
add('locate and load the startup configuration file -> phase 3');
add('perform the POST and load the bootstrap program -> phase 1');

add('link-local -> FE80:0:56BA:FFEE:A0B4:47FF:FE36:532B');
add('link-local -> FE80::1');
add('Multicast -> FF02::2');
add('Multicast -> FF02::1:FF3A:25C9');
add('global unicast -> 2001:DB8:10::12');
add('global unicast -> 2001:DB8:A1:0B:C78::1');

add('Stage 1 – perform the post');
add('Stage 2 – load the bootstrap program');
add('Stage 3 – Locate and load the Cisco IOS');
add('Stage 4 – locate and load the configuration file');

add('PDU encapsulation -> frame header');

add('POP -> does not require a centralized backup solution');
add('pop -> mail is deleted as it is downloaded');
add('pop -> desirable for an ISP or large business');
add('imap -> downloads copies of email messages to the client');
add('imap -> original messages must be manually deleted');
add('imap -> require a larger amount of disk space');

add('user EXEC mode -> limited number os basic monitoring commands');
add('user EXEC mode -> the first entrance into the CLI of an IOS device');
add('privileged EXEC mode -> accessed by entering the enable command');
add('privileged EXEC mode -> identified by a prompt ending with the # character');
add('global configuration mode -> changes made affect the operation of the device as a whole');
add('global configuration mode -> accessed by entering the congigure terminal command');

add('1 -> remote access method that uses encryption');
add('2 -> preferred out-of-band access method');
add('4 -> remote access via a dialup connection');
add('5 -> unsecure remote access');

add('Protect the network from unauthorized access. -> security');
add('Provide redundant links and devices. -> fault tolerance');
add('Expand the network without degrading the service for existing users. -> scalability');

add('CLI -> users interact with the operating system by typing commands');
add('GUI -> enables the user to interact with the operating system by pointing and clicking');
add('kernel -> the part of the OS that interacts directly with the device hardware');
add('shell -> the part of the operating system that interfaces with applications and the user');

add('Application layer -> HTTP and FTP');
add('Application layer -> end user program functionality');
add('Presentation layer -> compression');
add('Presentation layer -> common format');
add('Session layer -> dialog maintenance');

add('locale and load the Cisco IOS software -> phase 2');
add('locate and load the startup configuration file -> phase 3');
add('perform the POST and load the bootstrap program -> phase 1');

add('172.16.2.2 -> next hop');
add('10.3.0.0 -> destination network');
add('21024000 -> metric');
add('1 -> administrative distance');
add('00:22:15 -> route timestamp');
add('D -> route  source protocol');

