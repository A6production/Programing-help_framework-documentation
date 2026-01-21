---
sidebar_position: 3
---

# Warning
Warning about some possible errors

To log a warning you need to use the `logger.warn('Text')` function

```python
from programing_help_framework import Logger

logger = Logger()

logger.warn('If you do this action errors may appear')
```

If saving is enabled this will create log file and post warnings there too