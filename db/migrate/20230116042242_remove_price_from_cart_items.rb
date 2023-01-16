class RemovePriceFromCartItems < ActiveRecord::Migration[6.1]
  def change
    remove_column :cart_items, :price, :float
  end
end
