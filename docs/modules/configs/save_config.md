---
sidebar_position: 3
---

# Save Config
Saving the config to a file

To save the config you can use `config.save(configs)` function

```python
from programing_help_framework import Configs

config = Configs()

configs = {
    'version': '1.0',
    'developer': 'someone'
}

config.save(configs)
```

This function saves your `configs` variable to a file

Using this code in your config file you will see

```yaml
version: 1.0
developer: someone
```