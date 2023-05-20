import pool from '../configs/connectDB';


let initDB = async (req, res) => {
    dropAllTable();

    let sql =
        `CREATE TABLE members (
        member_id int PRIMARY KEY,
        name varchar(45),
        sex bit,
        date_of_birth date,
        identitycard int,
        apartment_id int,
        family_id int
    );
    
    CREATE TABLE apartments (
        apartment_id int PRIMARY KEY,
        floot int,
        area int, 
        owner_id int,
        time_start date,
        status varchar(100)
    );
    
    CREATE TABLE cars (
        car_id int PRIMARY KEY,
        car_type varchar(45),
        car_number varchar(45),
        status varchar(45),
        member_id int
    );
    
    CREATE TABLE familys (
        family_id int PRIMARY KEY,
        family_mode bit,
        status varchar(45)
    );
    
    CREATE TABLE phone_numbers (
        phone_number varchar(45),
        member_id int
    );`;

    const [rows, fields] = await pool.execute(sql);

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}


let genData = async (req, res) => {

    // define data for members table
    let member_id = 0;
    let name = 'vonhucong';
    let sex = 1;
    let date_of_birth = '1999-8-11';
    let identitycard = 187777709;

    // define data for phone_numbers table
    let phone_number = '0962941';

    // define data for cars table
    let car_id = 0;
    let car_type = 'xe máy';
    let car_number = 'xxx';

    // define data for apartments
    let apartment_id = 0;
    let floot = 0;
    let area = 0;

    // define data for familys
    let family_id = 0;

    for (let i = 0; i < 500; i++) {
        member_id = i;
        // insert to members table
        await pool.execute('insert into members(member_id, name, sex, date_of_birth, identitycard, car_id, apartment_id) values (?, ?, ?, ?, ?, ?, ?)',
            [member_id, name, sex, date_of_birth, identitycard, car_id, apartment_id]);

        // insert to phone_numbers table
        await pool.execute('insert into phone_numbers(member_id, phone_number) values (?, ?)',
            [member_id, phone_number + i]);

        // insert to cars table
        await pool.execute('insert into cars(car_id, car_type, car_number) values (?, ?, ?)',
            [car_id, car_type, car_number + i]);

        // insert to apartments table
        await pool.execute('insert into apartments(apartment_id, floot, area) values (?, ?, ?)',
            [apartment_id, floot, area]);

        // insert to familys table
        await pool.execute('insert into familys(family_id) values (?)',
            [family_id]);

        // insert to member_of_family
        await pool.execute('insert into member_of_family(family_id, member_id) values (?, ?)',
            [family_id, member_id]);

        family_id++;
        car_id++;
        apartment_id++;
        floot++;
        area++;
    }
    return res.status(200).json({
        message: 'ok'
    })
}

let truncateAllData = async (req, res) => {
    await pool.execute('truncate apartments');
    await pool.execute('truncate cars');
    await pool.execute('truncate familys');
    await pool.execute('truncate members');
    await pool.execute('truncate phone_numbers');

    return res.status(200).json({
        message: 'delete ok'
    })
}

let dropAllTable = async (req, res) => {
    await pool.execute('drop apartments');
    await pool.execute('drop cars');
    await pool.execute('drop familys');
    await pool.execute('drop members');
    await pool.execute('drop phone_numbers');

    return res.status(200).json({
        message: 'delete ok'
    })
}

module.exports = {
    initDB, genData, truncateAllData
}