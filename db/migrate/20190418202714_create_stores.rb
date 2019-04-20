class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :email
      t.string :facebook_url
      t.string :twitter_url
      t.string :instagram_url
      t.string :website

      t.timestamps
    end
  end
end
