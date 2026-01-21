---
sidebar_position: 1
---

# Import
Importing the logger module

You can import this module using

```python
from programing_help_framework import Logger
```

or

```python
import programing_help_framework.Logger
```

Or if you use all the modules you can import it using

```python
from programing_help_framework import *
```

To start using the module you have to assign the Logger to a variable

```python
from programing_help_framework import Logger

logger = Logger(save_logs="True / False(default)", folder="Path to the logs folder the default one is logs")
```