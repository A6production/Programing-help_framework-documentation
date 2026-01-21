---
sidebar_position: 2
---

# Load Config
Loading the config from a file

To load a config file you can use the `config.load()`

```python
from programing_help_framework import Configs

config = Configs()

configs = config.load()
```

This function returns `configs = {name: value}`

If you have config like this

```yaml
version: 1.0
developer: someone
```

You will get variable like this

```python
configs = {
    'version': '1.0',
    'developer': 'someone'
}
```