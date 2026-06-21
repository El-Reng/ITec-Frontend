let usuarios = [{"id":1,"first_name":"Kaine","last_name":"Daintith","bank":"FARMERS BANK","city":"Lupane","country":"Zimbabwe","salary":7856.99,"expenses":826.22},
{"id":2,"first_name":"Bartholomew","last_name":"Robeiro","bank":"BANK OF AMERICA","city":"Le Lamentin","country":"Martinique","salary":6972.75,"expenses":3513.99},
{"id":3,"first_name":"Fredrika","last_name":"Aiskrigg","bank":"BUSEY BANK","city":"Qingyun","country":"China","salary":1129.86,"expenses":4698.7},
{"id":4,"first_name":"Sukey","last_name":"Mongain","bank":"Raiffeisenbank Salzburg Liefering-Maxglan-Siezenheim eGen","city":"Baoluan","country":"China","salary":8920.83,"expenses":4247.53},
{"id":5,"first_name":"Christel","last_name":"People","bank":"FIRST NATIONAL BANK","city":"Tuapse","country":"Russia","salary":1543.84,"expenses":4008.69},
{"id":6,"first_name":"Fraze","last_name":"Gristock","bank":"FIRST TENNESSEE BANK","city":"Trzebinia","country":"Poland","salary":7485.54,"expenses":2886.14},
{"id":7,"first_name":"Ringo","last_name":"Boylund","bank":"Tunisian foreign bank","city":"Mramani","country":"Comoros","salary":8799.36,"expenses":1288.88},
{"id":8,"first_name":"Stephi","last_name":"Byrd","bank":"Sparkasse Imst AG","city":"Alicante/Alacant","country":"Spain","salary":7250.34,"expenses":2096.42},
{"id":9,"first_name":"Hewet","last_name":"Halfhead","bank":"BANCA NAZIONALE DEL LAVORO S.P.A. (IN FORMA CONTRATTA BNL S.P.A.)","city":"New Plymouth","country":"New Zealand","salary":7336.75,"expenses":2123.25},
{"id":10,"first_name":"Latisha","last_name":"Echelle","bank":"First Choice Credit Union Limited","city":"Englewood","country":"United States","salary":6149.49,"expenses":2599.2},
{"id":11,"first_name":"Lancelot","last_name":"Duignan","bank":"Raiffeisenkasse Schlitters, Bruck und Strass registrierte Genossenschaft mit beschränkter Haftung","city":"Flen","country":"Sweden","salary":1541.55,"expenses":579.93},
{"id":12,"first_name":"Goldia","last_name":"Strafford","bank":"FIRST STATE BANK","city":"Pyatovskiy","country":"Russia","salary":5386.03,"expenses":918.92},
{"id":13,"first_name":"Charla","last_name":"Binnell","bank":"FIRST NATIONAL BANK","city":"Waterloo","country":"Sierra Leone","salary":1681.57,"expenses":4051.47},
{"id":14,"first_name":"Allis","last_name":"Colledge","bank":"CITIZENS BANK","city":"Makhalino","country":"Russia","salary":9329.24,"expenses":4011.57},
{"id":15,"first_name":"Charmian","last_name":"Cater","bank":"VOLKSBANK SELIGENSTADT EG","city":"Kímolos","country":"Greece","salary":6225.84,"expenses":2657.16},
{"id":16,"first_name":"Heida","last_name":"Fishbie","bank":"VR Bank Lausitz eG","city":"Aramayuan","country":"Philippines","salary":2476.23,"expenses":2687.87},
{"id":17,"first_name":"Callie","last_name":"Fencott","bank":"INTESA SANPAOLO S.P.A.","city":"Chiguang","country":"China","salary":3620.0,"expenses":1741.54},
{"id":18,"first_name":"Charmane","last_name":"Trask","bank":"Société générale SFH","city":"Daxi","country":"China","salary":9590.82,"expenses":3079.34},
{"id":19,"first_name":"Althea","last_name":"Hassard","bank":"Bank of Valletta plc","city":"Kamo","country":"Japan","salary":3601.21,"expenses":4068.41},
{"id":20,"first_name":"Laughton","last_name":"Quantick","bank":"TD BANK","city":"Berezne","country":"Ukraine","salary":7557.12,"expenses":4988.76},
{"id":21,"first_name":"Alvan","last_name":"Hammand","bank":"FIRSTBANK","city":"Daguo","country":"China","salary":4303.17,"expenses":1420.07},
{"id":22,"first_name":"Shellie","last_name":"Walrond","bank":"BOA France","city":"Embu","country":"Kenya","salary":1704.91,"expenses":828.25},
{"id":23,"first_name":"Gunter","last_name":"Dealtry","bank":"BANCA NAZIONALE DEL LAVORO S.P.A. (IN FORMA CONTRATTA BNL S.P.A.)","city":"San Nicolas","country":"Philippines","salary":2303.97,"expenses":2734.13},
{"id":24,"first_name":"Ladonna","last_name":"Melbert","bank":"FIRST NATIONAL BANK OF OMAHA","city":"Pekalongan","country":"Indonesia","salary":9473.67,"expenses":4693.73},
{"id":25,"first_name":"Judas","last_name":"Wasselin","bank":"FIRST BANK","city":"Binlod","country":"Philippines","salary":9713.34,"expenses":1156.16},
{"id":26,"first_name":"Randi","last_name":"Simonsen","bank":"Sparkasse Borken-Schwalmstadt","city":"Novyy Oskol","country":"Russia","salary":8767.18,"expenses":2465.71},
{"id":27,"first_name":"Tisha","last_name":"Beedie","bank":"BMO HARRIS BANK","city":"Wonorejo","country":"Indonesia","salary":2494.43,"expenses":1887.77},
{"id":28,"first_name":"Web","last_name":"Calvey","bank":"WELLS FARGO BANK","city":"Białołeka","country":"Poland","salary":5724.95,"expenses":3418.3},
{"id":29,"first_name":"Celestina","last_name":"Surmeyers","bank":"PROSPERITY BANK","city":"Shiban","country":"China","salary":6448.71,"expenses":4635.7},
{"id":30,"first_name":"Falito","last_name":"Thirst","bank":"WESBANCO BANK INC","city":"Shigou","country":"China","salary":1862.12,"expenses":1242.67},
{"id":31,"first_name":"Aurlie","last_name":"Von Salzberg","bank":"GRENKE BANK AG","city":"Helixi","country":"China","salary":7131.98,"expenses":1374.31},
{"id":32,"first_name":"Jilly","last_name":"Smittoune","bank":"DNB Bank Polska S.A.","city":"Mari","country":"Indonesia","salary":4780.5,"expenses":4161.94},
{"id":33,"first_name":"Mortie","last_name":"Sappell","bank":"BANCA DEL PIEMONTE S.P.A.","city":"Duli","country":"China","salary":1328.02,"expenses":754.68},
{"id":34,"first_name":"Janeen","last_name":"Stoneley","bank":"Volksbank Delitzsch eG","city":"Hengbanqiao","country":"China","salary":6911.56,"expenses":2894.12},
{"id":35,"first_name":"Gilberte","last_name":"Learmonth","bank":"Volksbank Alb eG","city":"Yangping","country":"China","salary":8750.89,"expenses":4163.5},
{"id":36,"first_name":"Kaylil","last_name":"Gurry","bank":"DEUTSCHE BANK S.P.A.","city":"Hualong","country":"China","salary":1171.51,"expenses":4945.55},
{"id":37,"first_name":"Perrine","last_name":"Matterface","bank":"PROSPERITY BANK","city":"Seget","country":"Indonesia","salary":6387.61,"expenses":1421.18},
{"id":38,"first_name":"Anselm","last_name":"La Rosa","bank":"FIRST NATIONAL BANK OF OMAHA","city":"Oujiangcha","country":"China","salary":2209.94,"expenses":4888.15},
{"id":39,"first_name":"Zaria","last_name":"Balston","bank":"FIRST NATIONAL BANK","city":"Eláteia","country":"Greece","salary":3798.83,"expenses":892.74},
{"id":40,"first_name":"Neila","last_name":"Wardingly","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Mangulile","country":"Honduras","salary":2450.41,"expenses":1813.34},
{"id":41,"first_name":"Barr","last_name":"Oates","bank":"FIRST STATE BANK","city":"Granada","country":"Peru","salary":2570.8,"expenses":2914.44},
{"id":42,"first_name":"Onfroi","last_name":"Artin","bank":"Banque J. Safra Sarasin (Monaco) SA","city":"Sceaux","country":"France","salary":7488.38,"expenses":4496.99},
{"id":43,"first_name":"Anne","last_name":"Fleckney","bank":"CITIZENS BANK","city":"Pisaras","country":"Micronesia","salary":2623.64,"expenses":3537.74},
{"id":44,"first_name":"Marika","last_name":"Fritchley","bank":"BNP Paribas","city":"Izingolweni","country":"South Africa","salary":5013.77,"expenses":1181.14},
{"id":45,"first_name":"Zita","last_name":"Biswell","bank":"Caja Rural San José de Almassora, S. Coop. de Crédito V.","city":"Borgo Maggiore","country":"San Marino","salary":7101.0,"expenses":3478.63},
{"id":46,"first_name":"Romonda","last_name":"Boog","bank":"Caisse régionale de crédit agricole mutuel du Nord Est","city":"Raków","country":"Poland","salary":8576.05,"expenses":1619.12},
{"id":47,"first_name":"Wini","last_name":"Caldera","bank":"Wiener Neustädter Sparkasse","city":"Luobei","country":"China","salary":8602.78,"expenses":3682.38},
{"id":48,"first_name":"Leland","last_name":"Cardus","bank":"FIRST NATIONAL BANK","city":"Karema","country":"Tanzania","salary":1339.03,"expenses":4853.66},
{"id":49,"first_name":"Brynn","last_name":"Haresign","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Santana do Paraíso","country":"Brazil","salary":2735.7,"expenses":3492.8},
{"id":50,"first_name":"Jacinda","last_name":"Fenne","bank":"DNB Luxembourg S.A.","city":"Bestöbe","country":"Kazakhstan","salary":6883.13,"expenses":4828.44}]

function filtro_usuario(lista_usuarios) {
    let objetivo = Number(prompt('Ingrese el "ID" del usuario a buscar: '))

    for (let u of lista_usuarios) {
        if (u.id === objetivo) {
            return u
        }
    }
    console.log('ID de usuario ingresada no existente.')
}

function ahorro_mensual(usuario) {
    return usuario.salary - usuario.expenses
}

function mostrar_balance_mensual(usuario) {
    console.log(
        `Nombre: ${usuario.first_name} ${usuario.last_name}\n` +
        `Banco: ${usuario.bank}\n` +
        `Ahorro: ${ahorro_mensual(usuario)}`
    )
}

function obtener_calificacion(ahorro) {
    if (ahorro < 500) return 'Ahorro bajo'
    if (ahorro <= 1500) return 'Ahorro medio'
    return 'Ahorro alto'
}

function calificacion_financiera(lista_usuarios) {
    for (let u of lista_usuarios) {
        let ahorro = ahorro_mensual(u)
        let calificacion = obtener_calificacion(ahorro)

        console.log(
            `\nNombre: ${u.first_name} ${u.last_name}\n` +
            `Ahorro: ${ahorro}\n` +
            `"${calificacion}"`
        )
    }
}

function cant_ahorro_por(lista_usuarios, agrupar_por) {
    return lista_usuarios.reduce((acc, u) => {
        let grupo = u[agrupar_por]
        let ahorro = ahorro_mensual(u)

        if (!acc[grupo]) {
            acc[grupo] = { total: 0, cantidadUsuarios: 0 }
        }

        acc[grupo].total += ahorro
        acc[grupo].cantidadUsuarios++

        return acc
    }, {})
}

function mostrar_resultado(resultado, etiqueta) {
    for (let [clave, datos] of Object.entries(resultado)) {
        console.log(
            `\n${etiqueta}: ${clave}\n` +
            `total: ${datos.total}\n` +
            `clientes: ${datos.cantidadUsuarios}`
        )
    }
}

function main() {
    let usuario = filtro_usuario(usuarios)

    if (usuario) {
        console.log('1) Función de balance mensual')
        mostrar_balance_mensual(usuario)
    }

    console.log('\n2) Clasificación financiera')
    calificacion_financiera(usuarios)

    console.log('\n3) Cantidad de ahorro por banco')
    let ahorros_por_banco = cant_ahorro_por(usuarios, 'bank')
    mostrar_resultado(ahorros_por_banco, 'Banco')

    console.log('\n4) Cantidad de ahorro por país')
    let ahorros_por_pais = cant_ahorro_por(usuarios, 'country')
    mostrar_resultado(ahorros_por_pais, 'Pais')
}

main()