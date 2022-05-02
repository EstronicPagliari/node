insert into receita (nomereceita,settempo1,settemperatura1,settempo2,settemperatura2,settempo3,settemperatura3,
settempo4,settemperatura4,settempo5,settemperatura5,settempo6,settemperatura6,settempo7,settemperatura7,
settempo8,settemperatura8) values 
('Receita 10',
'120','100',
'60','100',
'300','500',
'60','500',
'180','720',
'120','720',
'120','680',
'60','680');

create table receitacarregada(
nomereceita varchar(255),
settempo1 int,
settemperatura1 int,
settempo2 int,
settemperatura2 int,
settempo3 int,
settemperatura3 int,
settempo4 int,
settemperatura4 int,
settempo5 int,
settemperatura5 int,
settempo6 int,
settemperatura6 int,
settempo7 int,
settemperatura7 int,
settempo8 int,
settemperatura8 int)

insert into receita (nomereceita,settempo1,settemperatura1,settempo2,settemperatura2,settempo3,settemperatura3,
settempo4,settemperatura4,settempo5,settemperatura5,settempo6,settemperatura6,settempo7,settemperatura7,
settempo8,settemperatura8) values 
('Receita X',
'30','30',
'60','35',
'60','40',
'60','40',
'60','45',
'30','45',
'60','50',
'30','50');


create table ligarforno(
	btligarforno int,
    fornoligado int
    )

    create table etapaatual(
 id int not null,
 etapaatual int,
 temporeceita int,
 tempoatual int,
 temperaturareceita int,
 temperatiraatual int,
 primary key (id)
 
);