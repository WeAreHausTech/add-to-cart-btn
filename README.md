# haus-storefront-widgets


## how to create new version
composer config version {version}
git commit -am "chore: bump {widget} to {version}"
git tag {version}

git subtree split --prefix=widgets/{widget} -b release/{widget}
git push https://github.com/WeAreHausTech/{widget}.git release/{widget}:main --tags