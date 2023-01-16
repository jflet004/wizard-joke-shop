class RemoveStatusFromCarts < ActiveRecord::Migration[6.1]
  def change
    remove_column :carts, :status, :string
  end
end
