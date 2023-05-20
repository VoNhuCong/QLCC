import pool from '../configs/connectDB';

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    console.log('check create new user: ', req.params);
    let { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('update users set firstName= ?, lastName = ? , email = ? , address= ? where id = ?',
        [firstName, lastName, email, address, id]);

    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from users where id = ?', [userId])
    return res.status(200).json({
        message: 'ok'
    })
}

let getAllMembers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllApartments = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let getAllFamily = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let getAllCars = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let genMembers = async (req, res) => {
    let dateOfBirth = '2023-5-13';
    let name = 'VoNhuCong';
    let identification = 187777709;
    let apartmentId = 0;
    for (let i = 0; i < 1000; i++) {
        await pool.execute('insert into members(date_of_birth, name, identification, apartment_id) values (?, ?, ?, ?)',
            [dateOfBirth, name + i, identification, apartmentId]);
        apartmentId++;
        identification++;
    }

    return res.status(200).json({
        message: 'ok'
    })
}


let genPacking = async (req, res) => {
    // member_id            int
    // car_id               int
    // packing_money        int
    // packing_first_date   date
    await pool.execute('insert into packing(member_id, car_id, packing_money, parking_first_date) values (?, ?, ?, ?)',
        [dateOfBirth, name + i, identification, apartmentId]);
}

let genRelationship = async (req, res) => {
    // member_id            int
    // family_id            int
    // relationship         string

    await pool.execute('insert into packing(member_id, car_id, packing_money, parking_first_date) values (?, ?, ?, ?)',
        [dateOfBirth, name + i, identification, apartmentId]);
}

let genApartment = async (req, res) => {
    // apartment_id         int
    // apartment_owner      string  
    // apartment_type       string
    // num_of_members       int
    // purchage_date        date

    await pool.execute('insert into packing(member_id, car_id, packing_money, parking_first_date) values (?, ?, ?, ?)',
        [dateOfBirth, name + i, identification, apartmentId]);
}



module.exports = {
    // user
    getAllUsers, createNewUser, updateUser, deleteUser,

    // member of apartment
    getAllMembers, getAllFamily, getAllApartments, getAllCars,

    // gen data for database
    genMembers, genPacking, genRelationship, genApartment
}