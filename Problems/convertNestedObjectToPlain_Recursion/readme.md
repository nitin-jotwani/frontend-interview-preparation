## Convert deep nested object to plain object
```
const personalInfo = {
    name: 'nitin',
    surname: 'jotwani',
    address: {
        city: 'Ulhasnagar',
        state: 'Maharashtra',
        landmark: {
            district: 'thane'
        }
    }
}
```
convert to
```
{
    personalInfo_name: 'nitin',
    personalInfo_surname: 'jotwani',
    personalInfo_address_city: 'Ulhasnagar',
    personalInfo_address_state: 'Maharashtra',
    personalInfo_address_landmark_district: 'thane' 
}
```