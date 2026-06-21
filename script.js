const usuarios = [{"id":1,"first_name":"Ellis","last_name":"Took","email":"etook0@lulu.com","gender":"Male","ip_address":"223.227.26.140"},
{"id":2,"first_name":"Ketty","last_name":"Leivesley","email":"kleivesley1@reverbnation.com","gender":"Female","ip_address":"102.33.145.88"},
{"id":3,"first_name":"Elsinore","last_name":"Franceschi","email":"efranceschi2@trellian.com","gender":"Female","ip_address":"210.153.109.5"},
{"id":4,"first_name":"Berkie","last_name":"Benbrick","email":"bbenbrick3@weibo.com","gender":"Male","ip_address":"213.88.114.194"},
{"id":5,"first_name":"Rozina","last_name":"Kachel","email":"rkachel4@dailymail.co.uk","gender":"Female","ip_address":"153.10.43.232"},
{"id":6,"first_name":"Vittoria","last_name":"Dy","email":"vdy5@tinypic.com","gender":"Female","ip_address":"9.176.197.227"},
{"id":7,"first_name":"Flem","last_name":"Harry","email":"fharry6@mozilla.com","gender":"Male","ip_address":"35.37.201.135"},
{"id":8,"first_name":"Dulsea","last_name":"Bridgett","email":"dbridgett7@google.com.au","gender":"Female","ip_address":"62.191.73.149"},
{"id":9,"first_name":"Chiarra","last_name":"McCrae","email":"cmccrae8@rakuten.co.jp","gender":"Female","ip_address":"61.112.191.240"},
{"id":10,"first_name":"Gwenore","last_name":"Tuffs","email":"gtuffs9@homestead.com","gender":"Bigender","ip_address":"252.176.36.204"},
{"id":11,"first_name":"Corina","last_name":"Wharlton","email":"cwharltona@shop-pro.jp","gender":"Female","ip_address":"175.233.173.219"},
{"id":12,"first_name":"Thekla","last_name":"Radish","email":"tradishb@geocities.com","gender":"Female","ip_address":"94.201.95.236"},
{"id":13,"first_name":"Josee","last_name":"Beardsley","email":"jbeardsleyc@hatena.ne.jp","gender":"Female","ip_address":"94.208.22.220"},
{"id":14,"first_name":"Anatollo","last_name":"Thornborrow","email":"athornborrowd@dyndns.org","gender":"Male","ip_address":"247.22.36.23"},
{"id":15,"first_name":"Selig","last_name":"Tabor","email":"stabore@discovery.com","gender":"Male","ip_address":"143.137.65.138"},
{"id":16,"first_name":"Lynde","last_name":"De Bruin","email":"ldebruinf@furl.net","gender":"Female","ip_address":"41.44.50.227"},
{"id":17,"first_name":"Edik","last_name":"Gautrey","email":"egautreyg@bbc.co.uk","gender":"Male","ip_address":"228.157.155.112"},
{"id":18,"first_name":"Cordelie","last_name":"Jeffreys","email":"cjeffreysh@cisco.com","gender":"Female","ip_address":"28.110.31.93"},
{"id":19,"first_name":"Sheryl","last_name":"Walrond","email":"swalrondi@bloomberg.com","gender":"Female","ip_address":"210.209.29.74"},
{"id":20,"first_name":"Thain","last_name":"De Mitri","email":"tdemitrij@fastcompany.com","gender":"Male","ip_address":"70.240.235.84"},
{"id":21,"first_name":"Philomena","last_name":"Culvey","email":"pculveyk@nymag.com","gender":"Female","ip_address":"135.236.113.132"},
{"id":22,"first_name":"Nester","last_name":"Prendergrast","email":"nprendergrastl@nhs.uk","gender":"Male","ip_address":"253.37.184.78"},
{"id":23,"first_name":"Agretha","last_name":"Charrier","email":"acharrierm@examiner.com","gender":"Female","ip_address":"113.104.175.88"},
{"id":24,"first_name":"Benton","last_name":"Headech","email":"bheadechn@hibu.com","gender":"Male","ip_address":"150.90.182.171"},
{"id":25,"first_name":"Vanna","last_name":"Downage","email":"vdownageo@sun.com","gender":"Female","ip_address":"215.110.136.238"},
{"id":26,"first_name":"Benedict","last_name":"Saines","email":"bsainesp@abc.net.au","gender":"Male","ip_address":"252.98.143.197"},
{"id":27,"first_name":"Ingar","last_name":"Wardley","email":"iwardleyq@ycombinator.com","gender":"Male","ip_address":"181.115.140.240"},
{"id":28,"first_name":"Thaxter","last_name":"MacCaughey","email":"tmaccaugheyr@nationalgeographic.com","gender":"Male","ip_address":"167.21.205.206"},
{"id":29,"first_name":"Bernadine","last_name":"Sisneros","email":"bsisneross@weebly.com","gender":"Female","ip_address":"56.36.106.156"},
{"id":30,"first_name":"Bord","last_name":"Wagenen","email":"bwagenent@go.com","gender":"Male","ip_address":"57.112.149.236"}]

function buscar_usuario_id() {
    let id = Number(prompt('Ingrese el ID a buscar: '))
    let usuario
    
    for (let u of usuarios) {
        if (u.id === id) {
            usuario = u
        }  
    }
    
    if (!usuario) {
        console.log('Usuario no encontrado.')
    } else {
        console.log('DATOS DEL USUARIO:')
        for (let dato in usuario) {
            console.log(dato + ': ' + usuario[dato])
        }
    }
}

function contador_datos_generos() {
    let conteo = usuarios.reduce((acumulador, usuario) => {
        let genero = usuario.gender;

        if (acumulador[genero]) {
            acumulador[genero]++;
        } else {
            acumulador[genero] = 1;
        }
        return acumulador;
    }, {});

    console.log('\n\nCONTEO POR GENEROS: ')
    for (let dato in conteo) {
        console.log(dato + ': ' + conteo[dato])
    }
}

function main() {
    buscar_usuario_id()
    contador_datos_generos()
}

main()