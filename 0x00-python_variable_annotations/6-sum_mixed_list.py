#!/usr/bin/env python3
''' Sum mixed list module '''
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    ''' Takes a list mxd_lst of integers and floats and
    returns their sum as a float. '''
    if mxd_lst is None:
        return 0
    else:
        return sum(mxd_lst)
