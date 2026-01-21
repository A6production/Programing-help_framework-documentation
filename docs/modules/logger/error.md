---
sidebar_position: 4
---

# Error
Log of an error

To log an error you need to use the `logger.error('Text', raise='True / False(default)')` function

```python
from programing_help_framework import Logger

logger = Logger()

logger.error('If you do this action errors may appear', False)
```

if raise is set to true the code will raise the error with a chance of stopping it

If saving is enabled this will create log file and post error there too