# compact-uuid

AUTO_INCREMENT is for chumps. Make your primary key compatible with distributed, multi-master systems from the get-go by using UUIDs. Inspired by http://mysql.rjweb.org/doc.php/uuid

## Usage

Your field should by MySQL BINARY(16) or compatible. Simply call

```
var CompactUuid = require('compact-uuid');
var myId = CompactUuid.generate()
```