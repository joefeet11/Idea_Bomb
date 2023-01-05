class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.belongs_to :user, foregin_key: true
      t.belongs_to :idea, foregin_key: true

      t.timestamps
    end
  end
end
